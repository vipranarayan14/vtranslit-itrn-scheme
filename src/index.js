export const vTranslitItrnScheme = {
  'about': {
    'schemeCode': 'Itrn',
    'schemeName': 'ITRANS',
    'type': 'roman'
  },
  'data': {
    'consonants': [
      'ka', 'kha', 'ga', 'gha', ['~Na', 'N^a'],
      'cha', 'Cha', 'ja', 'jha', ['~na', 'JNa'],
      'Ta', 'Tha', 'Da', 'Dha', 'Na',
      'ta', 'tha', 'da', 'dha', 'na', '^na',
      'pa', 'pha', 'ba', 'bha', 'ma',
      'ya', 'ra', 'Ra', 'la', 'La', 'zha', ['va', 'wa'],
      'sha', ['Sha', 'Sa', 'shha'], 'sa', 'ha'
    ],
    'deadConsonants': [
      'k', 'kh', 'g', 'gh', ['~N', 'N^'],
      'ch', 'Ch', 'j', 'jh', ['~n', 'JN'],
      'T', 'Th', 'D', 'Dh', 'N', 't',
      'th', 'd', 'dh', 'n', '^n',
      'p', 'ph', 'b', 'bh', 'm',
      'y', 'r', 'R', 'l', 'L', 'zh', ['v', 'w'],
      'sh', ['Sh', 'S', 'shh'], 's', 'h'
    ],
    'symbols': [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '|', '||', ['OM', 'AUM'], '.a', ['M', '.m'],
      ['H', '.h'], '.N'
    ],
    'virama': [
      ';;'
    ],
    'vowelMarks': [
      'a', ['A', 'aa'], 'i', ['I', 'ii'], 'u', ['U', 'uu'],
      ['RRi', 'R^i'],
      ['RRI', 'R^I'],
      ['LLi', 'L^i'],
      ['LLI', 'L^I'],
      'e', 'E', 'ai', 'o', 'O', 'au',
    ],
    'vowels': [
      'a', ['A', 'aa'], 'i', ['I', 'ii'], 'u', ['U', 'uu'],
      ['RRi', 'R^i'],
      ['RRI', 'R^I'],
      ['LLi', 'L^i'],
      ['LLI', 'L^I'],
      'e', 'E', 'ai', 'o', 'O', 'au',
    ]
  }
};
