def reverseString(self, s):
      for i in range(0,int(len(s)/2)):
        [s[i],s[len(s)-1-i]] = [s[len(s)-1-i],s[i]]
      return s
    # or
    #   return s.reverse()