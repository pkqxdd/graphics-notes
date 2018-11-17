======
Week 8
======

Special schedule -- Fall long weekend

.. contents::
	:local:



Class 1
=======

Wednesday, Oct. 31. Supervised by Ms. Healey.

Topics covered:

- Rasterization
	- Rasterization is the process of turning vectors into pixels.
- Shading
	- Shading is the process of calculating the brightness of the surface of an object under a certain light source.
		- Usually an active edge table (AET) is used in combination with scanline algorithm.
	- To shade an object, usually three different light sources are considered
		- Diffuse
		- Ambient
		- Specular (highlight)

We have watched this video in class

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tt4H_u25mX0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We have watched this video as homework

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gbbEtxcNXCU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this class we have discussed the effectiveness of the algorithms mentioned in the video. Especially, we have discussed the time complexity of the scanline algorithms –– namely, how many calculations the program needs to perform to render a particular frame. The example given in the video is a binary image –– meaning the image has only black or white in its value –– which makes the scanline algorithm very effective. It can simply calculate the edges of the image and fill solid color to everything in between the edges. However, it is not as effective when the object is no longer binary in color, because every single pixel on the screen needs to be traversed and traced individually, which makes it a huge computational burden.

As for shading, we have realized that the method in the video may not give completely realistic result, because it assumes the existence of an ambient light, or global illumination. This may not always be the case for some complicated structures, such as inside the hairs of a character. However, as it is the most commonly used method, video game characters tend to have very unrealistic hair.

class 2
=======

Class cancelled due to special schedule.

