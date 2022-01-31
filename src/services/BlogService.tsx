import {ServiceContainer} from "../core/ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {TRequestStatus} from "../interfaces";

interface IBlogPost {
    archived: boolean
    attachedStylesheets: any
    authorName: string
    blogAuthorId: string
    categoryId: number
    contentGroupId: string
    contentTypeCategory: number
    createdById: string
    currentState: string
    deletedAt: string
    domain: string
    enableGoogleAmpOutputOverride: boolean
    featuredImage: string
    featuredImageAltText: string
    htmlTitle: string
    id: string
    language: "en"
    layoutSections: {}
    metaDescription: string
    name: string
    postBody: string
    postSummary: string
    publicAccessRules: []
    publicAccessRulesEnabled: boolean
    publishDate: string
    rssBody: string
    rssSummary: string
    slug: string
    state: string
    tagIds: []
    updatedById: string
    url: string
    useFeaturedImage: boolean
}


export class BlogService {
    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);
    }

    @observable posts: IBlogPost[] = [];
    @observable requestStatus: TRequestStatus = 'initial';
    @observable error: any;

    @action
    fetchPosts() {
        this.requestStatus = 'pending'

        // TODO move to our cloud
        return fetch('https://warm-savannah-02639.herokuapp.com/hubspot/blog/posts')
            .then((res) => {
                return res.json()
            })
            .then(({results}) => {
                this.posts = results;
                this.requestStatus = 'success'
            })
            .catch((err) => {
                this.requestStatus = "error"
                this.error = err;

                return Promise.reject(err)
            })
    }
}