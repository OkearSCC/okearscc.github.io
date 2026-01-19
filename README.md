Contains the files for a GitHub Pages site.

The site allows for encrypting a message using a one-time set of randomly generated numbers (ranging from -25 to 25).

The message to be encrypted is shifted on a letter-by-letter basis according to its corresponding number.
For example, if -9, 5, and 0 were to be generated and used on the word 'run,' then 'r' would be shifted back nine places and would now be an 'i.'
The entire word would look something like this:

r = i \n
u = z \n
n = n \n

Therefore, the word 'run' would be 'izn.'

Note:
As you'd expect, this is an incredibly weak cipher. It's essentially just a more secure version of a Caesar cipher.
