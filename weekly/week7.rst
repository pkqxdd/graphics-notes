======
Week 7
======

.. contents::
	:local:

Class 1
=======

Monday, Oct. 22. Supervised by Ms. Healey.

Topics covered:

- Perspective projection (first step of graphics pipeline)
	- Perspective projection, also known as 3D projection, is simply projecting a 3D object onto a 2D plane.
	- Basically, :math:`f: \mathbb{R^2} \mapsto \mathbb{R^2}`
	- Steps to do perspective projection:
		#. Tranform the world space to camera space
		#. Transform the camera space to orthographic view volume (view frustum)
		#. Transform the orthographic view volume to canonical view volume
		#. Transform the canonical view volume to screen space (view port)

We have watched this video in class

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Rixtn9_WzzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We have watched this video as homework

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mQKIn1oZ7Fg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In addition, we have finished part 1 of `this worksheet <http://www.cs.uu.nl/docs/vakken/gr/2012-13/Tutorials/INFOGR_2012-2013_tutorial-04_pipeline-I.pdf>`_.

The major takeaway from the this worksheet is that the method of linear transformation in 3D. We want all affine transformation to be linear transformation as well. To achieve this, as well as using z-buffer, we are working with a 4x4 matrix instead of a 3x3 matrix. In addition, through this worksheet, we gain a better understanding of how perspective projection actually works.

Class 2
=======

Wednesday, Oct. 25. Supervised by Ms. Healey.

Topics Covered:

- Clipping 
	- Clipping is a process to "clip", or to remove parts of an object that are not visible on the viewport (the screen).
	- For example, if a part of an object is blocked by another object, the blocked part is clipped.
- Culling
	- Culling is a process to remove the objects that are completely not visible on the viewport (the screen) to reduce computation.
	- Usually, an object is not visible either because it is completely blocked by another object or is off-screen.
- Z-Buffer
	- Z-buffer is simply a buffer to store depth information of a frame.
	- It's called z-buffer because the value of z-axis, the axis that is orthonal to the screen is stored.

We have watched this video in class

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OoyR2bZ4R1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We have watched this video as homework

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N-eqhrXtcOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In addition, we have finished part 2 of `this worksheet <http://www.cs.uu.nl/docs/vakken/gr/2012-13/Tutorials/INFOGR_2012-2013_tutorial-04_pipeline-I.pdf>`_.

The big takeaway from this worksheet is that we learned the how to calculate clipping, culling and z-buffering. The lecture videos forcus only on concepts. Through the worksheet, we gained a solid understanding of how we should approach these concepts in a programatic way.
