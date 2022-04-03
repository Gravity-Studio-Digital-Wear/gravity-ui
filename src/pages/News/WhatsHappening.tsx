import * as React from 'react';
import {observer} from "mobx-react";
import {useService} from "../../core/decorators/service";
import {BlogService} from "../../services/BlogService";
import {
    Box,
    BoxProps,
    Flex,
    Grid,
    GridItem,
    HStack,
    Image,
    Link,
    Text,
    useMediaQuery,
    useToken
} from "@chakra-ui/react";
import {formatDate} from "../../utils/date";
import {Link as RouterLink, useHistory} from "react-router-dom";
import {Routes} from "../../app/routes";
import {Tag} from "./components/Tag";
import {PageSpinner} from "../../components/PageSpinner";
import {Page} from "../../core/Page";
import {BaseContainer} from "../../components/containers/BaseContainer";
import {toPath} from "svg-points";
import {getBox} from "css-box-model";
import {ReactComponent as RectangleShape} from "../LandingV2/assets/rectangle.svg";
import {ReactComponent as RectangleMobileShape} from "../LandingV2/assets/rectangle--mobile.svg";
import {IconBack} from "../../components/icons/IconBack";
import {usePageLoader} from "../../hooks/usePageLoader";
import {Polygon} from "../LandingV2/components/Polygon";

const BlogItemPolygon = `
    0 0, 
    calc(100% - 30px) 0, 
    100% 30px, 
    100% calc(100% - 21px),
    calc(100% - 21px) 100%,
    21px 100%,
    0 calc(100% - 21px)
`

// @ts-ignore
export const WhatsHappening: Page = observer(function WhatsHappening() {
    const blog = useService(BlogService);

    const pageLoadingStore = usePageLoader({
        breakpoints: {
            all: 100
        }
    })

    React.useEffect(() => {
        pageLoadingStore.done('all')
    }, [])

    const history = useHistory()

    const toPost = (id: string) => {
        history.push(Routes.news + '/' + id);
    }

    React.useEffect(() => {
        blog.fetchPostList();

        blog.tags.request()
    }, [])

    const [xl] = useToken(
        'breakpoints',
        ['xl']
    );
    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)


    return (
        <Box px={{base: '16px', xl: 0}}>
            <Flex>
                <Link as={RouterLink}
                      to={{pathname: Routes.main}}
                      fontSize={18}
                      textTransform={'uppercase'}
                      textDecoration={'none'}
                      display={'flex'}
                      alignItems={'center'}
                >
                    <IconBack/>
                    <Text as={'span'} ml={'12px'}>Go Back</Text>
                </Link>
            </Flex>


            <Text
                fontFamily={'All Round Gothic'}
                fontSize={{base: 34, xl: 54}}
                color={'white'}
                lineHeight={{base: '44px', xl: '68px'}}
                position={'relative'}
                mt={'120px'}
            >
                What’s happening

                <Box position={'absolute'} top={'-24px'} left={'-24px'}
                     display={{base: 'none', xl: 'block'}}>
                    <RectangleShape/>
                </Box>


                <Box position={'absolute'} top={'-48px'} left={0} display={{base: 'block', xl: 'none'}}>
                    <RectangleMobileShape/>
                </Box>
            </Text>


            {blog.tags.requestStatus === 'success' && (
                <HStack mt={'36px'} spacing={'10px'}>
                    {blog.tags.result?.results.map((tag) => (
                        <Tag
                            key={tag.id}
                            text={tag.name}
                            isActive={blog.selectedTag === tag.id}
                            onClick={() => blog.setSelectedTag(tag.id)}
                        />
                    ))}
                </HStack>
            )}


            {blog.isPostsLoading && (
                <PageSpinner/>
            )}

            {!blog.isPostsLoading && (
                <>
                    <Grid templateColumns={{base: '1fr', xl: 'repeat(3, 1fr)'}}
                          gridRowGap={'30px'}
                          gridColumnGap={'30px'}
                          mt={{base: '45px', xl: '140px'}}>
                        {blog.posts.map((post, index) => {
                            const isFirst = index === 0;

                            const isFullPage = isFirst && isLargerThanXl;

                            return (
                                <GridItem key={post.id} colSpan={isFullPage ? 3 : 1} position={'relative'}
                                          pb={isFullPage ? 0 : '120px'}>
                                    {isFullPage
                                        ? <Box display={'flex'} position={'relative'}>
                                            <Image
                                                src={post.featuredImage}
                                                maxH={'400px'}
                                                cursor={'pointer'}
                                                onClick={() => toPost(post.id)}
                                            />

                                            <Box position={'relative'} flexGrow={1} pl={'24px'}>
                                                <HStack spacing={'10px'}>
                                                    {post.tagIds.map((tagId) => {
                                                        const tag = blog.tags.result.results.find(t => +t.id === +tagId)
                                                        if (!tag) {
                                                            return;
                                                        }

                                                        return (
                                                            <Box key={tagId} transform={'scale(.75)'} left={'-10px'}
                                                                 position={'relative'}>
                                                                <Tag key={tagId} text={tag.name} isActive={false}/>
                                                            </Box>
                                                        )
                                                    })}
                                                </HStack>

                                                <Text fontWeight={700}
                                                      letterSpacing={'0.02em'}
                                                      fontSize={25}
                                                      cursor={'pointer'}
                                                      onClick={() => toPost(post.id)}
                                                      color={'white'}
                                                      mt={'20px'}>
                                                    {post.name}
                                                </Text>

                                                <Text fontWeight={400}
                                                      letterSpacing={'0.02em'}
                                                      fontSize={23}
                                                      color={'white'}
                                                      mt={'20px'}
                                                      dangerouslySetInnerHTML={{__html: post.metaDescription}}
                                                />

                                                <Text fontWeight={400} fontSize={23} position={'absolute'}
                                                      bottom={'18px'}>
                                                    {formatDate(post.publishDate)}
                                                </Text>

                                                <Box width={'100%'} height={'2px'} bg={'white'} position={'absolute'}
                                                     bottom={0}/>
                                            </Box>
                                        </Box>
                                        : <Box
                                            position={'relative'}
                                            h={'520px'}
                                            css={{
                                                clipPath: `polygon(${BlogItemPolygon})`,
                                                backdropFilter: 'blur(44px)'
                                            }}
                                        >
                                            <Polygon
                                                zIndex={2}
                                                position={'absolute'}
                                                width={'100%'}
                                                height={'100%'}
                                                userSelect={'none'}
                                                pointerEvents={'none'}
                                                config={{
                                                    edges: [[0, 0], [30, 30], [21, 21], [21, 21]]
                                                }}
                                            >
                                                {data => (
                                                    <path
                                                        className={'gr-polygon-btn-outline'}
                                                        d={data.path + 'Z'}
                                                        fill="none"
                                                        stroke="#ffffff"
                                                        strokeWidth={'2px'}
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    />
                                                )}
                                            </Polygon>

                                            <Box
                                                zIndex={3}
                                                width={'100%'}
                                                bg={'url(' + post.featuredImage + ')'}
                                                bgPosition={'center'}
                                                bgSize={'contain'}
                                                bgRepeat={'no-repeat'}
                                                height={'232px'}
                                                cursor={'pointer'}
                                                onClick={() => toPost(post.id)}
                                            />
                                            <Box px={'16px'}>

                                                <Box>
                                                    <HStack spacing={'10px'} mt={'14px'}>
                                                        {post.tagIds.map((tagId) => {
                                                            const tag = blog.tags.result.results.find(t => +t.id === +tagId)
                                                            if (!tag) {
                                                                return;
                                                            }

                                                            return (
                                                                <Box transform={'scale(.75)'} left={'-10px'}
                                                                     position={'relative'}>
                                                                    <Tag key={tagId} text={tag.name} isActive={false}/>
                                                                </Box>
                                                            )
                                                        })}
                                                    </HStack>
                                                </Box>


                                                <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25}
                                                      color={'white'}
                                                      cursor={'pointer'}
                                                      onClick={() => toPost(post.id)}
                                                      mt={'20px'}>
                                                    {post.name}
                                                </Text>

                                                <Text fontWeight={400}
                                                      letterSpacing={'0.02em'}
                                                      fontSize={16}
                                                      color={'white'}
                                                      mt={'20px'}
                                                      position={'absolute'} bottom={'48px'}
                                                      dangerouslySetInnerHTML={{__html: post.metaDescription}}
                                                />

                                                <Text fontWeight={400} position={'absolute'} bottom={'18px'}>
                                                    {formatDate(post.publishDate)}
                                                </Text>
                                            </Box>
                                        </Box>
                                    }
                                </GridItem>
                            )
                        })}
                    </Grid>
                </>
            )}
        </Box>
    );
});