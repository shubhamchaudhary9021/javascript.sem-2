l1 =[20,30,80,90]
a_75=0
b_40=0
for i in l1:
    if i>75:
        a_75+=1
    if i<40:
        b_40+=1
print("Number of elements greater than 75:",a_75)
print("Number of elements less than 40:",b_40)

l1=[30,40,50,60,70,80,90]
i = 0
a_75=0
b_40=0
while i < len(l1):
    if l1[i]>75:
        a_75+=1
    if l1[i]<40:
        b_40+=1
    i += 1          


l1=[-20,-30,80,90]
p_ve=0
n_ve=0
for i in l1:
    if i>=0:
        p_ve+=1
    else:
        n_ve+=1                 
