# -*- coding: utf-8 -*-
"""
Created on Tue Jun  1 22:23:51 2021

@author: saswa
"""

class Stack:
    def __init__(self):
        self.container = deque()
        
    def push(self, val):
        self.container.append(val)
        
    def pop(self):
        return self.container.pop()
    
    def peek(self):
        return self.container[-1]
    
    def is_empty(self):
        return len(self.container) == 0
    
    def size(self):
        return len(Self.container)
    
    
    
if __name__ == "__main__":
    s = Stack()
    s.push(124)
    s.push(767)
    s.push(67)
    s.push(78)
    print(s.peek())