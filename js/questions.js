const eventList = [
    '初心者1日体験',
    '初めての体験教室',
    '1日体験授業',
    'もっとうまく',
    '短期水泳教室',
    'ベビーちゃん',
    '高学年クラス'
];

const q1 = {
    'q1': {
        'question': 'Q1. 年齢を選択してください',
        'answer': [
            {
                next: 'q2a',
                option: '0 ~ 2歳6ヶ月'
            },
            {
                next: 'q2b',
                option: '2歳6ヶ月 ~ 9歳'
            },
            {
                next: 'q2c',
                option: '10歳 ~ 12歳'
            },
            {
                next: 'q2d',
                option: '13歳以上'
            }
        ]
    }
};

const q2 = {
    'q2a': {
        'question': 'Q2. ご希望の体験期間を選択してください',
        'answer': [
            {
                next: null,
                option: '1日',
                suggest: 0
            },
            {
                next: null,
                option: '2日 ~ 4日',
                suggest: 5
            }
        ]
    },
    'q2b': {
        'question': 'Q2. ご希望の体験期間を選択してください',
        'answer': [
            {
                next: 'q3a',
                option: '1日',
            },
            {
                next: 'q3b',
                option: '2日 ~ 4日',
            }
        ]
    },
    'q2c': {
        'question': 'Q2. ご希望の体験期間を選択してください',
        'answer': [
            {
                next: 'q3c',
                option: '1日',
            },
            {
                next: 'q3d',
                option: '2日 ~ 4日',
            },
            {
                next: null,
                option: '短期間',
                suggest: 6
            },
        ]
    },
    'q2d': {
        'question': 'Q2. ご希望の体験コースを選択してください',
        'answer': [
            {
                next: null,
                option: '無料コース',
                suggest: 3
            },
            {
                next: null,
                option: '有料コース',
                suggest: 4
            }
        ]
    }
}

const q3 = {
    'q3a': {
        'question': 'Q3. ご希望の授業形態を選択してください',
        'answer': [
            {
                next: null,
                option: '体験授業申込者のみのクラス',
                suggest: 0
            },
            {
                next: null,
                option: '実際のクラス',
                suggest: 2
            }
        ]
    },
    'q3b': {
        'question': 'Q3. ご希望の体験コースを選択してください',
        'answer': [
            {
                next: 'q4a',
                option: '無料コース',
            },
            {
                next: null,
                option: '有料コース',
                suggest: 4
            }
        ]
    },
    'q3c': {
        'question': 'Q3. ご希望の授業形態を選択してください',
        'answer': [
            {
                next: null,
                option: '体験授業申込者のみのクラス',
                suggest: 0
            },
            {
                next: null,
                option: '実際のクラス',
                suggest: 2
            }
        ]
    },
    'q3d': {
        'question': 'Q3. ご希望の体験コースを選択してください',
        'answer': [
            {
                next: 'q4a',
                option: '無料コース',
            },
            {
                next: null,
                option: '有料コース',
                suggest: 4
            }
        ]
    }
}

const q4 = {
    'q4a': {
        'question': 'Q4. イトマンの過去イベント参加経験を選択してください',
        'answer': [
            {
                next: null,
                option: '経験あり',
                suggest: 3
            },
            {
                next: null,
                option: '経験なし',
                suggest: 1
            }
        ]
    }
}

function getQuestions(){
    return {
        'q1': q1,
        'q2': q2,
        'q3': q3,
        'q4': q4
    }
};

function getEvents(){
    return eventList;
}