txt = 'The secret password is Eden.'
key = 20

mode = input('enter enc/dec')
symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

res = ''
def encrypt(txt,key):   
    res = ''
    for symbol in txt.upper():
        if symbol in symbols:
            symbolIndex = symbols.find(symbol)
            symbolIndex += key
            if symbolIndex >= len(symbols):
                symbolIndex -= len(symbols)
            res += symbols[symbolIndex]
        else:
            res +=symbol
    return(res)

def decrypt(c, key):
    res = ''
    for symbol in c.upper():
        if symbol in symbols:
            symbol_index = symbols.find(symbol)
            symbol_index -= key
            if symbol_index < 0:
                symbol_index += len(symbols)
            res += symbols[symbol_index]
        else:
            res += symbol
    return(res)

if mode == 'enc':
    print(encrypt(txt,key))
elif mode == 'dec':
    c = encrypt(txt,key)
    txt = decrypt(c,key)
    print(txt)