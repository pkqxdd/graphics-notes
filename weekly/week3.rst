======
Week 3
======

.. contents::
	:local:


Class 1
=======

Monday, Sept. 24. Supervised by Ms. Healey.

We have watched this video in class:

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4I2S5Xhf24o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We have watched this video for homework:

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KAW7lXxMSb4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In addition, we have finished this worksheet.

- `Basic Geometric Entities, Intersections. Matrices, Determinants, Linear Equation Systems <http://www.cs.uu.nl/docs/vakken/gr/2012-13/Tutorials/INFOGR_2012-2013_tutorial-02_maths.pdf>`_

The worksheet is basically just practicing basic arithmetics in the form of matrices. And as computer scientists, we don't ever need to do arithmetics by hand. So we used some simple python programs to help us with most of the calculations.




Class 2
=======

Wednesday, Sept. 26. Supervised by Dr. Bardoe.

Topics covered:

- Linear transformation
	- Squeezing
		- On x-axis :math:`\begin{bmatrix}k&0\\0&1\end{bmatrix}`
		- On y-axis :math:`\begin{bmatrix}1&0\\0&k\end{bmatrix}`
	- Stretching
		- :math:`\begin{bmatrix}k&0\\0&\frac{1}{k}\end{bmatrix}`
	- Scaling
		- :math:`\begin{bmatrix}k&0\\0&k\end{bmatrix}`
	- Shearing
		- On x direction :math:`\begin{bmatrix}1&k\\0&1\end{bmatrix}`
		- On y direction :math:`\begin{bmatrix}1&0\\k&1\end{bmatrix}`
	- Rotation
		- Counterclockwise :math:`\begin{bmatrix}\cos\theta &-\sin\theta\\\sin\theta &\cos\theta\end{bmatrix}`
		- Clockwise :math:`\begin{bmatrix}\cos\theta &\sin\theta\\-\sin\theta &\cos\theta\end{bmatrix}`

This class gave us a concrete understanding of how linear transformation works on a geometric object that composes multiple vectors –– how the direction of those vectors are preserved and changed based on the location of the vector and how some transformation fail to work on some orthogonal vectors.
