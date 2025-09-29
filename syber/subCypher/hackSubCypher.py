cipher = 'Sy l nlx sr pyyacao l ylwj eiswi upar lulsxrj isr sxrjsxwjr, ia esmm rwctjsxsza sj wmpramh, lxo txmarr jia' \
' aqsoaxwa sr pqaceiamnsxu, ia esmm caytra jp famsaqa sj. Sy, px jia pjiac ilxo, ia sr pyyacao rpnajisxu eiswi lyypcor ' \
'l calrpx ypc lwjsxu sx lwwpcolxwa jp isr sxrjsxwjr, ia esmm lwwabj sj aqax px jia rmsuijarj aqsoaxwa. Jia pcsusx py' \
' nhjir sr agbmlsxao sx jisr elh. -Facjclxo Ctrramm'
    
# algoritem: invert the cipher to it's pattern and then compare the cipher pattern to a the wordPatterns file
# comparePattern algo - compare every obj in the dictionary to the dictionary in the wordPatterns file
def getWordPattern(word):
    # Returns a string of the pattern form of the given word.
    # e.g. '0.1.2.3.4.1.2.3.5.6' for 'DUSTBUSTER'
    word = word.upper()
    nextNum = 0
    letterNums = {}
    wordPattern = []

    for letter in word:
        if letter not in letterNums:
            letterNums[letter] = str(nextNum)
            nextNum += 1
        wordPattern.append(letterNums[letter])
    return '.'.join(wordPattern)


def getCipherWordPattern(cipher):
    cipher = cipher.lower()
    wordPattern = {}
    for word in cipher.split():
        wordPattern[word] = str(getWordPattern(word))
    return wordPattern

#print(getCipherWordPattern(cipher))


def comparePattern(cipher, wordIdex):
    cipherPattern = getCipherWordPattern(cipher)
    f = open('wordPatterns.py', 'r')
    content = f.read().split()
    newWord = {}
    for wordd in cipherPattern: # try how to get one word per func call
        word = wordd
        break
    for i in range(len(content)):
        if cipherPattern[word] == content[i]: # fix if
            newWord[word] = content[i]
                
    return newWord

print(comparePattern(cipher))


