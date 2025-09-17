import random
LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

def translateMessage(key, message, mode):
    translated = ''
    charsA = LETTERS
    charsB = key
    if mode == 'decrypt':
        # For decrypting, we can use the same code as encrypting. We
        # just need to swap where the key and LETTERS strings are used.
        charsA, charsB = charsB, charsA

    # Loop through each symbol in message:
    for symbol in message:
        if symbol.upper() in charsA:
            # Encrypt/decrypt the symbol:
            symIndex = charsA.find(symbol.upper())
            if symbol.isupper():
                translated += charsB[symIndex].upper()
            else:
                translated += charsB[symIndex].lower()
        else:
            # Symbol is not in LETTERS; just add it
            translated += symbol

    return translated

def encryptMessage(key, message):
    return translateMessage(key, message, 'encrypt')


def decryptMessage(key, message):
    return translateMessage(key, message, 'decrypt')


def generateRandomKey():
    key = list(LETTERS)
    random.shuffle(key)
    return ''.join(key)

def isValidKey(key):
    keyList = list(key)
    lettersList = list(LETTERS)
    keyList.sort()
    lettersList.sort()
    return keyList == lettersList


key = generateRandomKey()
print('key:', key)
print(decryptMessage('FWEJIQGRSAZNDTOKLMVHCPUXBY', 'rinno s go ho veroon hojfb!!'))