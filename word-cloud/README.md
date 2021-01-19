# [Cloudy](https://cloudy-word-cloud.herokuapp.com/)


Table of Contents
=================

   * [Introduction](#Introduction)
      * [Registers](#Registers)
        * [Mnemonics](#Mnemocis)
        * [Generic](#Generic)
        * [Function](#Function)
        


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
| $a0-$a3 | arguement registers |
| $v0-$v1 | return values |
| $ra | return address |
