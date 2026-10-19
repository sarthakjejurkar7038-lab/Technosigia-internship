
# check number even or odd
x = int(input("Enter a number:"))

if x%2 == 0:
    print(x,"It is even")
else:
    print(x,"It is odd")


#find the greatest number from three numbers
num1 = int(input("Enter a first number:"))
num2 = int(input("Enter a second number:"))
num3 = int(input("Enter a third number:"))

if num1>num2 and num1>num3:
    print(num1,"is greater")
elif num2>num1 and num2>num3:
    print(num2,"is greater")
else:
    print(num3,"is greater")


#find the factorial of number
x = 5
s = 1
for i in range(1,x+1):
    s *= i

print(s)


#check the number is prime or not
number = int(input("Enter a number:"))
if number%2 == 0:
    print(number,"is not prime")
    if number==2:
        print(number,"is prime")
else:
    print(number,"is prime")




#print reverse of a number
number = (input("Enter a number:"))
print("reverse of number is:",number[: :-1])


#table of a number
number = int(input("Enter a number for table:"))
                                                                                                                                                                                                                                                                                
for i in range(1,11,1):
    print(number*i)
