# This is a comment
# age = 48
# name = 'Ruben'
#print("My Name is {} and I am {} years old".format(name, age))
# sentence = (f'My name is {name} and I am {age} years old')
# print(sentence)
# todayisCold = False

# if name != "Ruben":
#    print("You are older than 45")
#    print("This is another line")
# else:
#    print("You are younger than 50")
#
# year = 2020
#
# if 2000 <= year <= 2100:
#    print("Welcome to the 21st century")
# else:
#    print("You are before or after the 21st century")
#
# functions
# age = 48
# name = 'Ruben'
# todayisCold = True
#
# def hello(name="Ruben", age=49):
#    return "Hello {} you are {} years old".format(name, age)
# sentance = hello()
# 
# print(sentance)
#
#
#def tripleprint(strg):
#    return strg + strg + strg
#
# textn = input("Please input text: ")
#
# print(tripleprint(textn))

# dognames = ["Milo", "Suki", "Lily", "Margaux", "nGozi"]
#
# dognames.insert(0, "Ruben")
# dognames[1] = "Ruben"
#
# print(dognames[2])
# print(dognames[4])
# print(dognames[3])
#
# print(len(dognames))
#
# print(dognames)
# shoes = ["Spizikes", "Air Force 1", "Curry 2", "Melo 5"]
# print(shoes)
#
# dognames = ["Milo", "Suki", "Lily", "Margaux", "nGozi", "Larry"]
#
# for x in range(1,10):
#    print(x)
#
# age = 0
#
# while age < 18:
#    print(age)
#    age += 1
#
# numbers = [55, 1000, 2, 100, 20, 888, 400, 37, 600, 89, 88, 72]
# for i in numbers:
#    if i < 40:
#        print(i)
# words = ["Elephant", "Lion", "Buffalo", "Leopard", "Rhino"]
#
# definitions = ["Large with trunk", "Big Fro, sharp teeth",
#               "Temperamental, curly horns", "Spotty, Stealthy", "Horny, grey"]
#
# cooldictionary = dict(zip(words, definitions))
#
# print(cooldictionary)

class Dog:
    dogInfo = "Hey dogs are cool!"
    dogpond = "Water makes me happy!"
    dogdoodoo = "Shit!"

    def bark(self):
        print("BARK!")


mydog = Dog()
mydog.bark()
mydog.name = "Fido"
mydog.age = 16
print(mydog.name)
print(mydog.age)

print(Dog.dogInfo)
print(Dog.dogpond)
print(Dog.dogdoodoo)

class Car

def__init(self, year)
self.year = (2016)


def age(self):
    self.age = (2018 - year)
    return self.age
