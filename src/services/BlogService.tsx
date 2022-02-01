import {ServiceContainer} from "../core/ServiceContainer";
import {action, autorun, computed, makeAutoObservable, observable, reaction, toJS} from "mobx";
import {TRequestStatus} from "../interfaces";
import {ApiRequest} from "../core/ApiRequest";

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

interface IBlogTag {
    id: string;
    deletedAt: string;
    name: string;
}

function fetchTags(): Promise<{ results: IBlogTag[] }> {
    return fetch('https://warm-savannah-02639.herokuapp.com/hubspot/blog/tags')
        .then((res) => {
            return res.json()
        })
}

function fetchRelated(id: string): Promise<IBlogPost[]> {
    return fetch(`https://warm-savannah-02639.herokuapp.com/hubspot/blog/posts/${id}/related`)
        .then((res) => {
            return res.json()
        })
}


export class BlogService {
    public tags = new ApiRequest(fetchTags);

    public related = new ApiRequest(fetchRelated);

    @observable selectedTag: string;

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);

        reaction(() => this.selectedTag, () => {

            this.fetchPostList()
        })


        reaction(() => this.post.id, () => {
            this.related.request(this.post.id);
        })
    }



    @action setSelectedTag(id: string) {
        if (this.selectedTag === id) {
            this.selectedTag = null;

            return;
        }

        this.selectedTag = id;
    }

    @observable posts: IBlogPost[] = [];
    @observable requestStatus: TRequestStatus = 'initial';
    @observable error: any;

    @computed
    public get isPostsLoading() {
        return this.requestStatus !== 'success' || this.tags.requestStatus !== 'success';
    }

    @action
    fetchPostList() {
        this.requestStatus = 'pending'
        const url = new URL('https://warm-savannah-02639.herokuapp.com/hubspot/blog/posts')
        if (!!this.selectedTag) {
            url.searchParams.set('tagId', this.selectedTag)
        }

        this.requestStatus = 'pending'

        // TODO move to our cloud
        return fetch(url.toString())
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

    @observable post: IBlogPost;
    @observable postRequestStatus: TRequestStatus = 'initial';
    @observable postError: any;

    @action
    fetchPost(id: string) {
        this.requestStatus = 'pending'

        // TODO move to our cloud
        return fetch('https://warm-savannah-02639.herokuapp.com/hubspot/blog/posts/' + id)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.post = res;
                this.postRequestStatus = 'success'
            })
            .catch((err) => {
                this.postRequestStatus = "error"
                this.error = err;

                return Promise.reject(err)
            })
    }
}