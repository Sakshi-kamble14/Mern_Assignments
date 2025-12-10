def fact(number):
    if number<0:
        return "Factorial is not defined for negative numbers"
    elif number == 0 or number == 1 :
        return 1
    else :
        return number * fact(number - 1)