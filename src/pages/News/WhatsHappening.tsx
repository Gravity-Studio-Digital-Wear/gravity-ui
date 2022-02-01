import * as React from 'react';
import {observer} from "mobx-react";
import {useService} from "../../core/decorators/service";
import {BlogService} from "../../services/BlogService";
import {Box, Flex, Grid, GridItem, HStack, Image, Text} from "@chakra-ui/react";
import {BgGradientText} from "../../components/GradientText";
import {formatDate} from "../../utils/date";
import {useHistory} from "react-router-dom";
import {Routes} from "../../app/routes";
import {Tag} from "./components/Tag";
import {PageSpinner} from "../../components/PageSpinner";

export const WhatsHappening = observer(function WhatsHappening() {
    const blog = useService(BlogService);

    const history = useHistory()

    const toPost = (id: string) => {
        history.push(Routes.news + '/' + id);
    }

    React.useEffect(() => {
        blog.fetchPostList();

        blog.tags.request()
    }, [])



    return (
        <Box>
            <Box mt={'90px'}>
                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 110}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    WHAT'S {' '}

                    <br/>
                    <BgGradientText as={'span'} bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}> HAPPENING </BgGradientText>
                </Text>
            </Box>

            {blog.tags.requestStatus === 'success' && (
                <HStack mt={'24px'} spacing={'10px'}>
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
                    <Grid templateColumns={'repeat(3, 1fr)'}  gridRowGap={'30px'} gridColumnGap={'30px'} mt={'140px'}>
                        {blog.posts.map((post, index) => {
                            const isFirst = index === 0;

                            return (
                                <GridItem key={post.id} colSpan={isFirst ? 3 : 1} position={'relative'} pb={isFirst ? 0 : '120px'}>

                                    {isFirst
                                        ? <Box display={'flex'}>
                                            <Image
                                                src={post.featuredImage}
                                                maxH={'400px'}
                                            />

                                            <Box position={'relative'} flexGrow={1} pl={'24px'} >
                                                <HStack spacing={'10px'}>
                                                    {post.tagIds.map((tagId) => {
                                                        const tag = blog.tags.result.results.find(t => +t.id === +tagId)
                                                        if (!tag) {
                                                            return;
                                                        }

                                                        return (
                                                            <Box transform={'scale(.75)'} left={'-10px'} position={'relative'}>
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
                                                      color={'basic.500'}
                                                      mt={'20px'}>
                                                    {post.name}
                                                </Text>

                                                <Text fontWeight={400}
                                                      letterSpacing={'0.02em'}
                                                      fontSize={23}
                                                      color={'basic.500'}
                                                      mt={'20px'}
                                                      dangerouslySetInnerHTML={{__html: post.postBody}}
                                                />

                                                <Text fontWeight={400}  fontSize={23} position={'absolute'} bottom={'18px'}>
                                                    {formatDate(post.publishDate)}
                                                </Text>

                                                <Box width={'100%'} height={'2px'} bg={'#523774'} position={'absolute'}
                                                     bottom={0}/>
                                            </Box>
                                        </Box>
                                        : <Box>
                                            <Box
                                                width={'100%'}
                                                bg={'url(' + post.featuredImage + ')'}
                                                bgPosition={'center'}
                                                bgSize={'contain'}
                                                bgRepeat={'no-repeat'}
                                                height={'232px'}
                                            />


                                            <Box>

                                                <Box>
                                                    <HStack spacing={'10px'} mt={'14px'}>
                                                        {post.tagIds.map((tagId) => {
                                                            const tag = blog.tags.result.results.find(t => +t.id === +tagId)
                                                            if (!tag) {
                                                                return;
                                                            }

                                                            return (
                                                                <Box transform={'scale(.75)'} left={'-10px'} position={'relative'}>
                                                                    <Tag key={tagId} text={tag.name} isActive={false}/>
                                                                </Box>
                                                            )
                                                        })}
                                                    </HStack>
                                                </Box>


                                                <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25}
                                                      color={'basic.500'}
                                                      cursor={'pointer'}
                                                      onClick={() => toPost(post.id)}
                                                      mt={'20px'}>
                                                    {post.name}
                                                </Text>

                                                <Text fontWeight={400}
                                                      letterSpacing={'0.02em'}
                                                      fontSize={16}
                                                      color={'basic.500'}
                                                      mt={'20px'}
                                                      position={'absolute'} bottom={'48px'}
                                                      dangerouslySetInnerHTML={{__html: post.postBody}}
                                                />


                                                <Text fontWeight={400} position={'absolute'} bottom={'18px'}>
                                                    {formatDate(post.publishDate)}
                                                </Text>

                                                <Box width={'100%'} height={'2px'} bg={'#523774'} position={'absolute'}
                                                     bottom={0}/>
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