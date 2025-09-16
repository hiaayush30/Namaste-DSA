def removeElement(nums, val):
    p1 = 0

    for i in range(0, len(nums)):
        if nums[i] != val:
            nums[p1] = nums[i]
            p1 = p1 + 1
    print(nums)
    print(f"{p1} elements")


removeElement([1, 2, 2, 3, 4, 5, 6, 2, 7, 8, 9, 10], 2)
