import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'

export default () => (
  <Post>
    <Head><title>Discussions</title></Head>
    <Title>DISCUSSIONS</Title>
    <Meta date="August 11, 2018" />

    <h3>Time and Nature</h3>
    <P>
    The sameness of the sunrise seascape scene brings peacefulness while the everchanging
    colors are dynamic and keep it interesting. After a while, it becomes deeply
    moving and resonant, feeling like a portrait of humanity in nature, of people from scattered
    places, all progressing through the rhythms of the day. These people are hassling through
    the day but nature remains the same. Everyday worries suddenly feels small and irrelevant.
    </P>

    <P>
    The process of watching the synthetic sunrise is intriguing, I keep asking myself
    where is the sun currently rising from the horizon right now? I feel a deep connection with
    someone from far away who is experiencing the sunrise right now. We are sharing the same
    sunrise view at the moment. What does time mean? They are just numbers that are made
    for easier communication. Timezones seems so artificial as a human construct as we look
    at the earth shadow moving across the globe and bringing light to different areas.
    </P>

    <P>
    The sunrise piece can run indefinitely pulling color from the instant sunrise pictures
    from around the world and the same applies to the map. However, the colors and
    pictures stay the same when there are no new pictures being uploaded, for cases when the
    sun is rising over the Atlantic ocean and the Pacific Ocean where there are few people who
    can take pictures of the sunrises. How do we account for that? Does it mean that the sunrise
    is not happening right now? How could we ever experience a sunrise from those places?
    This represents a greater part of nature that cannot be captured by technology, like it is
    impossible for humans to power over the nature.
    </P>

    <h3>Technology and Collaboration</h3>
    <P>
    This project employs social media channel technologies and methods of appropriation,
    extraction, and intervention, to explore how our generation and society, interact
    with technology, especially in the area of social media.
    </P>

    <P>
    The focus on social media of this project has led to the possibility of exploring
    subjects that can be collectively constructed. I take the practically infinite quantity of sunrise
    images on Instagram to collectively construct a constantly changing portrait of nature.
    The work is an accumulation that navigates collective expression in society.
    </P>

    <P>
    I try to address how differently an image functions on the Internet than in physical
    time and space, specially the shifts in meaning around the subject when transcribed to social
    media. The sunrise is a very dynamic scene and yet is so universally photographed. I have
    heard an audience member comment, ’I feel like I have seen this picture before’. Are the
    Instagram users still expressing their creativity through photographing sunrise? Are they
    just trying to capture a typical sunrise that happens every morning?
    </P>

    <style jsx>{`
        a {
            cursor: pointer
        }
        a:hover {
            text-decoration: underline
        }
        a:after {
            display: none
        }
    `}</style>
</Post>
)
