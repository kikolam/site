import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import Meta from '../../components/post/meta'
import Snippet from '../../components/post/snippet'
import { H2 } from '../../components/post/heading'
import P from '../../components/post/paragraph'
import OL, { LI as OLI } from '../../components/post/numbers-list'
import Figure, { Image } from '../../components/post/figure'

export default () => (
  <Post>
    <Head><title>Implementation</title></Head>
    <Title>IMPLEMENTATION</Title>

    <H2>WebGL</H2>

    <P>
    This program is written in C++ with the openFramework toolkit. OpenFramework
    is designed for creative coding, and supports libraries for powerful graphics and animation
    tools. OpenFramework gives a lot of support and tools to
    artists and programmers to create computational art work.
    </P>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/sample-1.png" />
    </Figure>

    <H2>Multilayer Perceptron Classifier</H2>

    <P>
    Instagram reached 300 million monthly active users in 2015 and its users share
    more than 70 million photos and videos each day. There have been over 20 billion photos
    shared on the website. The popularity of Instagram makes
    a huge photography database. However, the abundance of Instagram images bring some
    down sides as well, such as people misusing the hashtags and tagging unrelated materials
    as ’sunrise’, for example, selfies, advertisements, etc. Instagram users tend to put excessive
    hashtags to gain popularity and increase their number of followers and "likes" on their
    pictures. I collected over 3000 images that were tagged "#sunrise" and found some of them
    to be completely unrelated to sunrise.
    </P>

    <P>
    To combat this, I started to collect features to distinguish good sunrise images and
    unrelated ones. In this paper, "Sunset scene classification using simulated image recomposition",
    the authors claim sunsets were easily separated from mountain and forest scenes.
    Color was found to be the most salient, confirming our intuition that
    sunsets are recognizable primarily by their brilliant, warm colors. They also believe that
    spatial information should be incorporated to distinguish sunsets from other scenes containing
    warm colors, such as those of desert rock formations and fireworks. Therefore, they
    used spatial color moments, dividing the image into 49 regions using a 7 x 7 grid and computing
    the mean and variance of each band of an Luv-transformed image. This yields 49 x
    2 x 3 = 294 features. However, OpenFramework does not support the
    Luv color space. This classifier takes the the mean and variance of each band in the HBV
    color space instead.
    </P>

    <P>
    However, even after implementing the method that the paper suggested, the system
    was still not getting enough confirmed positive results. Some of the unrelated images
    consist of brilliant, warm colors that are similar to those found in the real sunrise images.
    I investigated further and found some very Instagram specific features that could be added
    to the attribute set of the classifier. As I have mentioned before, Instagram users tend to
    put excessive hashtags to improve exposure to the Instagram community in order to raise
    the number of followers and "likes" on their pictures. Therefore, it seems reasonable to
    assume that the more hashtags a picture has, the more likely that the picture is unrelated.
    The same concept applies to the position of the "#sunrise" hashtag. Good sunrise images
    usually have the "#sunrise" hashtag early on in their caption rather than later.
    </P>

    <P>
    With these two added features, for a total of 296 attributes, I trained a Multilayer
    Perceptron classifier with a 10-fold cross-validation to recognize real sunrise pictures
    from other unrelated images using Weka, a mechine learning tool. The Multilayer Perceptron
    classifier has the remarkable ability to derive meaning and extract patterns from
    complicated or imprecise data [Duda et al., 2012]. The classifier places weights on the importance
    of the given features attributes using the “backpropagation” algorithm and benefits
    from having a large training set. Research has shown that Multilayer Perceptron classifier
    can produce accurate predictions, however it takes about 10–2000 times slower than other
    methods, including ZeroR, OneR, J48, NaiveBayes, IBk, AdaBoostM1, VotedPerceptron
    [Witten, 2015]. In this project, I had enough time to prepare a more accurate classifier with
    Multilayer Perceptron. I trained the model on 3368 labelled images which I preprocessed
    by manually classifying them according to my perception. The training set of images includes
    1781 "good" images and 1587 "bad" images. I trained the classifier with a learning
    rate of 0.3, a momentum rate of 0.2, 500 epochs, a threshold of 20 for the number of consecutive
    errors, and (attributes+classes) / 2 = 149 number of nodes per layer.
    </P>

    <P>
    The classifier behaves fairly well with a correct classified rate of 69.9%.
    In this project, it was more important for the classifier to identify incorrect images
    rather than to be able to identify every single good image. As we can see from the ROC
    graphs from the bad class value, the steep curve indicates a strong signal to noise ratio. An
    ROC curve is a plot of the True Positive Rate (on the y-axis) versus the False Positive Rate
    (on the x-axis) for every possible classification threshold [Fawcett, 2006]. Both the True
    Positive Rate and the False Positive Rate range from 0 to 1. The steep curve means that the
    classifier was able to correctly identify most of the false images.
    </P>

    <H2>Color Extraction</H2>

    <P>
    After the system filters out the unrelated sunrise images from Instagram in real
    time, I needed to synthesize the images to recreate the sunrise scene. I decided to design
    an algorithm to extract a sky color palette from the images to channel into a composition
    that create an "eternal sunrise".
    </P>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/sample-2.png" />
    </Figure>

    <P>
    My first attempt to extract a palette is to use quantization with the K-means algorithm
    on the images using the OpenFramework add-on tool, ofxColorQuantizer [Rotsztain,
    2015]. Quantization is the process of representing an image with a small number of well
    selected colors. K-means algorithm is an iterative clustering technique that approximates
    an optimal palette using multiple subsets of image pixels [Verevka, 1995]. This method
    selects K initial cluster means, and iterates until stopping criterion is satisfied. The 12 most
    abundant colors from the pictures were selected to compose the sky and the ocean in the
    sunrise scene. However, the brightness and saturation of those colors were either too high
    or too low. These 12 distinctly different colors did not represent the smooth gradient of sky
    colors well. I tried to select more colors for a smoother color palette. However, the more
    colors I picked, the slower the quantization process is. The system cannot afford a long
    quantization process because the color extraction is in real time. To avoid colors that have
    too much contrast, I went on investigating other simpler and quicker ways to select the sky
    colors for the sunrise scene.
    </P>

    <P>
    After observing many sunrise images and performing many trial experiments,
    I found a way to translate the smooth gradient of sky colors to
    the composition. In photography, objects appear dark as a silhouette when put in front of
    a bright background (see image below: the objects that are in red rectangles appear as silhouette).
    Silhouettes became helpful in extracting sky colors because dark colors of silhouette
    are easy to identify. It was helpful to avoid taking those dark pixels into account when
    extracting sky colors from the images.
    </P>

    <Figure wide>
      <Image src="https://github.com/kikolam/site/raw/master/resources/silhouette.png" />
    </Figure>

    <P>
    I extracted the colors using a simple algorithm. The sunrise composition is
    mainly composed of lines of different colors. For every line, I take the average of the
    RGB values of the pixels across a row (i.e. a row of pixels which have the same y value)
    and also avoid all the almost black pixels (pixels with brightness less than 25 out of 255).
    The results are satisfying as they present a smooth color sequence that looks like the sky
    behind the sunrise scene.
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
