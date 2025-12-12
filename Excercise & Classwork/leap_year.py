def leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                print("Given year is leap year also centuray year!")
            else:
                print("Given year is not leap year but centuray year")
        else:
            print("Leap year")
    else:
        print("Not leap")