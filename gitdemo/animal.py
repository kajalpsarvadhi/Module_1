import sys


def dog():

	print('wooooffff!!')
def cat():
	print('meooowww!!!')

def default():
	print(hello python")


def main():
	if sys.argv[1] == 'cat':
		cat()
	elif sys.argv[1] == 'dog':
		dog()	
	else:
		default()

if __name__ == '__main__':
	main()

 
