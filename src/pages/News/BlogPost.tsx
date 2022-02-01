import * as React from 'react'
import {observer} from "mobx-react";
import {Box, Flex, HStack, Image, Link, Spinner, Stack, Text} from "@chakra-ui/react";
import {Link as RouterLink, useRouteMatch} from "react-router-dom";
import {useService} from "../../core/decorators/service";
import {BlogService} from "../../services/BlogService";
import {Tag} from "./components/Tag";
import {Routes} from "../../app/routes";
import {IconBack} from "../../components/icons/IconBack";
import {PageSpinner} from "../../components/PageSpinner";
import {formatDate} from "../../utils/date";
import {RelatedPosts} from "./components/RelatedPosts";
import {BgGradientText} from "../../components/GradientText";


export const BlogPost = observer(function BlogPost() {
    const blog = useService(BlogService)
    const match = useRouteMatch<{ id: string }>();


    React.useEffect(() => {
        blog.fetchPost(match.params.id)

        if (blog.tags.requestStatus !== 'success') {
            blog.tags.request();
        }
    }, [])

    if (blog.postRequestStatus !== 'success' || blog.tags.requestStatus !== 'success') {

        return (
            <PageSpinner/>
        )
    }


    return (
        <Stack spacing={'32px'} px={{base: '16px', xl: 0}}>
            <Flex>
                <Link as={RouterLink}
                      to={{pathname: Routes.news}}
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

            <Stack alignItems={'center'} spacing={'20px'}>

                <HStack spacing={'10px'}>
                    {blog.post.tagIds.map((tagId) => {
                        const tag = blog.tags.result.results.find(t => +t.id === +tagId)
                        if (!tag) {
                            return;
                        }

                        return <Tag key={tagId} text={tag.name} isActive={false}/>
                    })}
                </HStack>

                <Text align={'center'}
                      maxW={'745px'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 60}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}
                >
                    {blog.post.name}
                </Text>


                <Text align={'center'}
                      maxW={'745px'}
                      textTransform={'uppercase'} fontSize={23} fontWeight={'400'} color={'basic.300'}
                      letterSpacing={'0.03em'} lineHeight={1.1}>
                    {formatDate(blog.post.publishDate)}
                </Text>
            </Stack>


            <Box>


                <Box mt={'30px'} display={'flex'} justifyContent={'center'}>

                    <Image src={blog.post.featuredImage}  width={'100%'} height={'auto'}/>
                </Box>


                <Box mt={'90px'} display={'flex'} justifyContent={'center'}>


                    <Box maxW={'745px'} flexBasis={'100%'}>
                        <Text align={'left'}

                              textTransform={'uppercase'} fontSize={40} fontWeight={'700'} color={'basic.500'}
                              letterSpacing={'0.03em'} lineHeight={1.1}
                        >
                            {blog.post.name}
                        </Text>


                        <Text mt={'40px'} dangerouslySetInnerHTML={{__html: blog.post.postBody}}/>
                    </Box>


                </Box>
            </Box>


            <Box>
                <Box mt={{base: '60px', xl: '120px'}}>
                    <Text align={'left'}
                          textTransform={'uppercase'} fontSize={{base: 42, xl: 60}} fontWeight={'700'} color={'basic.500'}
                          letterSpacing={'0.03em'} lineHeight={1.1}

                    >
                        You may be <br/> interested in
                    </Text>
                </Box>

                <RelatedPosts/>
            </Box>
        </Stack>
    );
});