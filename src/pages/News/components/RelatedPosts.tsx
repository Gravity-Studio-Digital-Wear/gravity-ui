import {Box, Grid, GridItem, HStack, Image, Text} from "@chakra-ui/react";
import {Tag} from "./Tag";
import {formatDate} from "../../../utils/date";
import * as React from "react";
import {useService} from "../../../core/decorators/service";
import {BlogService} from "../../../services/BlogService";
import {useHistory} from "react-router-dom";
import {Routes} from "../../../app/routes";
import {observer} from "mobx-react";

export const RelatedPosts = observer(function RelatedPosts () {
    const blog = useService(BlogService)

    const history = useHistory()

    const toPost = (id: string) => {
        history.push(Routes.news + '/' + id);
    }

    if (blog.related.requestStatus !== 'success') {

        return null;
    }

    return (
        <Grid templateColumns={{base: '1fr', xl: 'repeat(3, 1fr)'}}  gridRowGap={'30px'} gridColumnGap={'30px'} mt={{base: '30px', xl: '140px'}}>
            {blog.related.result.map((post, index) => {
                return (
                    <GridItem key={post.id} position={'relative'} pb={'120px'}>
                        <Box>
                            <Box
                                width={'100%'}
                                bg={'url(' + post.featuredImage + ')'}
                                bgPosition={'center'}
                                bgSize={'contain'}
                                bgRepeat={'no-repeat'}
                                height={'232px'}
                                cursor={'pointer'}
                                onClick={() => toPost(post.id)}
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
                    </GridItem>
                )
            })}
        </Grid>
    )
})