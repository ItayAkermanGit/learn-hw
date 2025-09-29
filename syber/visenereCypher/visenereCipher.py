al = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
#print(al.index('D'))
def encrypt(key, msg):
    return translate(key, msg, 'encrypt')


def decrypt(key, cipher):
    return translate(key, cipher, 'decrypt')

def translate(key, data, mode):
    translateList = []
    keyIndex = 0
    key = key.upper()
    for symbole in data:
        num = al.find(symbole.upper())
        if num != -1:
            if mode == 'encrypt':
                num += al.find(key[keyIndex]) 
            elif mode == 'decrypt':
                num -= al.find(key[keyIndex]) 
            num %= len(al)  

            if symbole.isupper():
                translateList.append(al[num])
            else:
                translateList.append(al[num].lower())
            keyIndex += 1
            if keyIndex == len(key):
                keyIndex = 0
        else:
            translateList.append(symbole)
    return ''.join(translateList)


if __name__ == '__main__':
    print(encrypt('BOP', 'PROSPER'))
    print(decrypt('BOP', 'QFDTDTS'))