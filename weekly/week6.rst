======
Week 6
======

.. contents::
	:local:


Class 1
=======

Monday, Oct. 15. Supervised by Ms. Healey.

Topics covered:

- WebAssembly
	- WebAssembly is the techniques behind three.js, the library we will build our final project upon. It can speed up the process of rendering dramatically.
- Texture Mapping
	- Texture mapping, as the name suggests, is the technique people use to render the texture of an object.

We have read the following articles

- `What is WebAssembly <https://medium.com/javascript-scene/what-is-webassembly-the-dawn-of-a-new-era-61256ec5a8f6>`_
- `Teaching Texture Mapping Visually <https://www.siggraph.org//education/materials/HyperGraph/mapping/r_wolfe_mapping.pdf>`_

We spent most of this class discussing rendering techniques and what library is the best for our final projects. Some of the libraries we discussed inlcude OpenGL, WebGL. In addition, we have discussed how the browser works and how an image is created on a computer. Usually, this process is done using some sort of library so the details are abstracted out to designers and programmers. However in essence the process requires the communication between GPU and software to even render a simplest window. Through the medium of WebAssembly, we are able to communicate almost directly with GPU and CPU without too much computational overhead. In the end, we have decided to use three.js for its simplicity to implement and its wide availability, as well as its indecency of additional software installation.

Class 2
=======

Wednesday, Oct. 17.

This class, we continue to work on texture mapping.

We have watched this lecture in class:

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bsOKULY9kJ8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

We have watched this lecture for homework:

.. raw:: html

	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nhQtzmEMfrs?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

The importance of texture mapping is that it reflects the surface of an object, which is all an end user can see. Texture is the deterministic factor of how real an object looks. An object that lacks texture will be perceived as unreal, even though people are able to relate the object to real life objects. The most extreme expample of lack of texture is stick figures or cartoons. They have correct shapes in general, however they are obviously unrealistic because they lack of texture –– they are simply a huge block of colors. A realistic object on screen, such as a photograph, would have very detailed serface, such as a gradient of change in highlight in accordance to the reflectance of the object. Reflectance, or how smooth the surfaces of the object are, is all texture mapping is about. The end goal is to model mathamtically, as well as construct programatically, the surface of a given object as close as possible while taking a moderate amount of time to compute. 
