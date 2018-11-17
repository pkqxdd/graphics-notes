======
Week 5
======

.. contents::
	:local:


Class 1
=======

Monday, Oct. 8. Supervised by Ms. Healey.

We then decided to use a well-known library named foolbox. However we ran into the same issue: imcompatible image size. Instead of changing the foolbox library, we made a very bode decision: changing the keras library as well as the foolbox library.

Which, again, did not work. The symptoms this time was, however, different. The program ran without throwing any error and terminted correctly. However the image output was either the same as the input file or completely black. A fun fact to notice here, as well as for our past week of effert, is that every single run of the program takes at least 2 minutes and may go up to several hours. As our most limited resource is time, debugging has become increasingly infeasible as the runtime of the program increases (meaning, proceeding with fewer errors on the way). So again, after spending several hours debugging the library code, we have realized that it's

#. a very likely dead end, and
#. a waste of time to debug a library.

So we have decided to use a different method: gradient ascent. And here we ran into different issues, the primary one is that the gradient is not converging –– meaning, the gradient, or the slope of loss, is bouncing back and forth instead of reaching a steady point. What's more problematic is that a gradient ascent program takes several hours to run, but we only have a few days. We feel, however, that this is a promising method and decided to run the program, for the first time since our project started, in parallel, distributed. So we rent several web servers online, get out every single computer we have, and run the same program at the same time, with some slight differences in parameters such as the learning rate, threshold, and/or the numbers of iterations the program should run.

While waiting for the neural network to be trained, we also started working on a side project, which is using neural network to turn a photograph into something that looks like drawing. 

Class 2
=======

Wednesday, Oct. 10. Supervised by Ms. Healey.

After many failures, we decided to use an ad-hoc method that is inspired by gradient ascent. The idea behind is basically the same. However we changed how we implement it. So instead of the standard gradient ascent method, we wrote our own implementations.

Wow, it worked! Our product is detailly documented in the summary section :ref:`adversarial attack`.

And this concludes our midterm project.
