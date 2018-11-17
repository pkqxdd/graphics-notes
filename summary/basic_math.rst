************************
Mathematics Fundamentals
************************

.. contents::
	:local: 

.. _vectors:

=======
Vectors
=======
Vector is something that has both a magnitude and a direction, for example, an arrow. A vector can be represented by a letter with an arrow on it, such as :math:`\vec{v}`, or two letters, such as :math:`\overrightarrow{CD}`. Note that in the case of two letters, the sequence of the letter signifies the direction of the vector and cannot be reversed. For any non-zero vectors, :math:`\overrightarrow{AB}=-\overrightarrow{BA}`.

The magnitude of the vector is, in fact, the length of the vector. For example, the magnitude of :math:`\vec{a}`, denoted by :math:`\vec{|a|}` or :math:`\vec{||a||}`, is calculated by taking the squareroot of each component squared.

How to represent a vector? Vectors don't have a coordinate, which means vectors are equivalent if and only if they have the same direction and magnitude, no matter where they are.

.. _matrices:

========
Matrices
========

The size of a matrix is row :math:`\times` column. For example, :math:`\begin{bmatrix}1&2&3\\4&5&6\end{bmatrix}` is a :math:`2\times 3` matrix.

Represent Linear System with Matrices
=====================================

.. math::

	\left\{ 
	\begin{array}{c}
	2x+5y=10\\
	3x+4y=24
	\end{array}
	\right.
	\leftrightarrow
	\begin{bmatrix}
	2&5&10\\
	3&4&24
	\end{bmatrix}
	
.. math::

	\left\{
	\begin{array}{c}
	2x-y+2z+t=-2\\
	x+y-5t=5
	\end{array}
	\right.
	\leftrightarrow
	\begin{bmatrix}
	2&-1&2&1&-2\\
	1&1&-5&0&5
	\end{bmatrix}

Matrices Multiplication
=======================
To multiply two matrices, the second matrices must have same number of columns as the first matrix's number of rows. Note that normally :math:`A\times B \neq B\times A` unless one or two of them is identity matrix or they are inverse matrices. The first element of the product matrix is the sum of first row dot first first column and so on (dot product). 

For example, to find out the result of :math:`\begin{bmatrix}1&2&3\\ 4&5&6 \end{bmatrix} \times \begin{bmatrix} 7&8\\ 9&10\\ 11&12 \end{bmatrix}` add up the result of first row of first matrix times first column of second matrix.

.. math::
	
	\begin{bmatrix}
	1&2&3\\
	4&5&6
	\end{bmatrix}\times
	\begin{bmatrix}
	7&8\\
	9&10\\
	11&12
	\end{bmatrix} = \begin{bmatrix}
	1\times7+2\times9+3\times11&1\times8+2\times10+3\times12\\
	4\times7+5\times9+6\times11&4\times8+5\times10+6\times12
	\end{bmatrix}=\begin{bmatrix}
	58&64\\
	139&154
	\end{bmatrix}

We have stated and know that a system of equations can have 0,1 or infinitely many solutions. Let's prove it.

We show that if there is nore than 1 solution to Ax=b then there must be infinitely many.

Let c and d be solutions with c not equal d
Ac=b and Ad=b

.. math::

	Ac-Ad=A(c-d)=0
	

set :math:`v=c-d`

Consider 

.. math::

	\vec{c}+k\vec{v}
	A(c+kv)=Ac+kAv=b+k*0=b

So c+kv is a solution to Ax+b for all k

Thus we know infinitely many solutions