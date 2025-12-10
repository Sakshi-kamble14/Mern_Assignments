import arithmetic
import geometric as geo
from geometric import calc_rec_peri
print("Hello World!")
num1=int(input("Enter num1 :"))
num2=int(input("Enter num2 :"))

arithmetic.add(num1,num2)
arithmetic.substract(num1,num2)

len=int(input("Enter length :"))
br=int(input("Enter bredth :"))

geo.calc_rec_area(len,br)
calc_rec_peri(len,br)