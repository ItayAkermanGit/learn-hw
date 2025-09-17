key = 8
msg = 'Common sense is not so common.'

def encrypt(msg, key):
    ciphertxt = [''] * key
    for col in range(key):
        currentIndex = col
        while currentIndex < len(msg):
            ciphertxt[col] += msg[currentIndex]
            currentIndex += key

    return ''.join(ciphertxt)

res = encrypt(msg,key)

def decrypt(res, key):
    if len(res) / key % 10 != 0:
        numOfLines = int((len(res) / key) + 1)
    deciphertxt = [''] * numOfLines
    numOfBlank = numOfLines * key - len(res)
    row = 0
    charIndex = 0
    for char in res:
        deciphertxt[row] += char
        row += 1
        charIndex +=1
        if charIndex <= len(res) - (numOfBlank - 1) * numOfLines:
            if row == numOfLines:
                row = 0
        elif row == numOfLines - 1:
            row = 0
    return ''.join(deciphertxt)


print(decrypt(res,key))
