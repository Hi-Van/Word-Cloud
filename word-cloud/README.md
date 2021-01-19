# MIPS Basics


Table of Contents
=================

   * [Introduction](#Introduction)
      * [Registers](#Registers)
        * [Mnemonics](#Mnemocis)
        * [Generic](#Generic)
        * [Functions](#Functions)
        * [Memory](#Memory)
        * [Reserved](#Reserved)
      * [System Call Operations](#System_Call_Operations)
        


# Introduction

#### MIPS is:
- a readable form of machine language

#### build-it-yourself:
- No abstractions
- No Classes
- No Data Structures
- No Functions
- No loops
- No conditionals (if statements)
- No variables

#### it utilizes:
- Registers
- Operations
- Memory
- System Calls


# Registers 
- substitutes the roles of a variables
- unlike variables, there are limited registers
- there are 32 32-bit registers

### Mnemonics

| MIPS     | assigned Values |
| ----------- | ----------- |
| $zero | 0 |
| $at | 1 |
| $v0-$v1 | 2-3 |
| $a0-$a3 | 4-7 |
| $t0-$t7 | 8-15 |
| $s0-$s7 | 16-23 |
| $t8-t9 | 24-25 |
| $k0-$k1 | 26-27 |
| $gp | 28 |
| $fp | 29 |
| $sp | 30 |
| $ra | 31 |


### Generic

| Register     | Purpose | Saved? |
| ----------- | ----------- | --- |
| $zero | 0 | N/A |
| $t0-$t9 | temporary registers | Caller Saved |

### Functions

| Register     | Purpose | Saved? |
| ----------- | ----------- | --- |
| $s0-$s7 | saved registers | Calle Saved |
| $a0-$a3 | arguement registers | N/A |
| $v0-$v1 | return values | N/A |
| $ra | return address | N/A |

### Memory

| Register     | Purpose | Explanations |
| ----------- | ----------- | --- |
| $gp | global pointer | manages the heap |
| $fp | frame pointer | marks the beginning of our memory block within the stack |
| $sp | stack pointer | holds local variables, saved registers that are overwritten, and marks the end of the memory block |


### Reserved

| Register     | Purpose | Explanations |
| ----------- | ----------- | --- |
| $at | assembler temporary | expands psuedo instruction to machine code instructions |
| $k0-$k1 | Kernel registers | reserved for the OS kernel |

# System Call Operations
