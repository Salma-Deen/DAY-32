QUERIES:
--------

1.Find all the topics and tasks which are thought in the month of October.

 //Topics:
    db.Topics.find({
        date: {
            $gte: "2020-10-01",
            $lte: "2020-10-31"
        }
    });
OUTPUT:
[
    {
        _id: ObjectId('6756b1045dc525daf93ba482'),
        topicName: 'CSS',
        date: '2020-10-10'
    },
    {
        _id: ObjectId('6756b1045dc525daf93ba483'),
        topicName: 'DOM',
        date: '2020-10-22'
    },
    {
        _id: ObjectId('6756b1045dc525daf93ba484'),
        topicName: 'NODEJS',
        date: '2020-10-27'
    }
]

//Tasks:
db.Tasks.find({ date: { $gte: "2020-10-01", $lte: "2020-10-31" } });
OUTPUT:
[
    {
        _id: ObjectId('6756bee45dc525daf93ba48b'),
        userId: '02',
        taskName: 'HTML/CSS',
        date: '2020-10-20',
        isSubmitted: false
    },
    {
        _id: ObjectId('6756bee45dc525daf93ba48c'),
        userId: '03',
        taskName: 'AXIOS',
        date: '2020-10-14',
        isSubmitted: true
    },
    {
        _id: ObjectId('6756bee45dc525daf93ba48e'),
        userId: '05',
        taskName: 'SHOPPINGCART',
        date: '2020-10-19',
        isSubmitted: true
    }
]
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2.Find all the company drives which appeared between 15 oct - 2020 and 31 - oct - 2020

//QUERY:
db.companyDrives.find({ date: { $gte: "2020-10-15", $lte: "2020-10-31" } })
OUTPUT:
[
    {
        _id: ObjectId('6756a74f5dc525daf93ba470'),
        company: 'TCS',
        date: '2020-10-25',
        student: 'sam@example.com'
    },
    {
        _id: ObjectId('6756a74f5dc525daf93ba472'),
        company: 'TCS',
        date: '2020-10-27',
        student: 'arul@example.com'
    },
    {
        _id: ObjectId('6756a74f5dc525daf93ba474'),
        company: 'TCS',
        date: '2020-10-22',
        student: 'alice@example.com'
    }
]
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3.Find all the company drives and students who are appeared for the placement.
  
//QUERY:
db.companyDrives.find({}, { company: 1, student: 1 })
OUTPUT:
    [
        {
            _id: ObjectId('6756a74f5dc525daf93ba470'),
            company: 'TCS',
            student: 'sam@example.com'
        },
        {
            _id: ObjectId('6756a74f5dc525daf93ba471'),
            company: 'TCS',
            student: 'david@example.com'
        },
        {
            _id: ObjectId('6756a74f5dc525daf93ba472'),
            company: 'TCS',
            student: 'arul@example.com'
        },
        {
            _id: ObjectId('6756a74f5dc525daf93ba473'),
            company: 'TCS',
            student: 'robin@example.com'
        },
        {
            _id: ObjectId('6756a74f5dc525daf93ba474'),
            company: 'TCS',
            student: 'alice@example.com'
        },
        {
            _id: ObjectId('6756a74f5dc525daf93ba475'),
            company: 'TCS',
            student: 'raj@example.com'
        }
    ]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
4.Find the number of problems solved by the user in codekata.

//QUERY:
db.codekata.find({}, { userId: 1, problemSolved: 1 })
OUTPUT:
[
    {
        _id: ObjectId('6756a0685dc525daf93ba444'),
        userId: '01',
        problemSolved: 90
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba445'),
        userId: '02',
        problemSolved: 30
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba446'),
        userId: '03',
        problemSolved: 80
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba447'),
        userId: '04',
        problemSolved: 70
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba448'),
        userId: '05',
        problemSolved: 50
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba449'),
        userId: '06',
        problemSolved: 70
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba44a'),
        userId: '07',
        problemSolved: 60
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba44b'),
        userId: '08',
        problemSolved: 40
    },
    {
        _id: ObjectId('6756a0685dc525daf93ba44c'),
        userId: '09',
        problemSolved: 60
    }
]
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
5.Find all the mentors with who has the mentee's count more than 15

//QUERY:
db.Mentor.find({ mentee_Count: { $gt: 15 } })
OUTPUT:
[
    {
        _id: ObjectId('6756ab2b5dc525daf93ba478'),
        mentor: 'Sanjay',
        mentee_Count: 20
    },
    {
        _id: ObjectId('6756ab2b5dc525daf93ba47a'),
        mentor: 'Priya',
        mentee_Count: 30
    },
    {
        _id: ObjectId('6756ab2b5dc525daf93ba47b'),
        mentor: 'Vikram',
        mentee_Count: 17
    }
]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
6.Find the number of users who are absent and task is not submitted  between 15 oct - 2020 and 31 - oct - 2020

//ATTENDANCE:
db.Attendance.find({ $and: [{ date: { $gte: "2020-10-15", $lte: "2020-10-31" } }, { isPresent: false }] })
OUTPUT:
[
    {
        _id: ObjectId('6756a2b75dc525daf93ba459'),
        date: '2020-10-29',
        userId: '05',
        isPresent: false
    },
    {
        _id: ObjectId('6756a2b75dc525daf93ba45b'),
        date: '2020-10-16',
        userId: '07',
        isPresent: false
    },
    {
        _id: ObjectId('6756a2b75dc525daf93ba45c'),
        date: '2020-10-20',
        userId: '08',
        isPresent: false
    }
]

//TASKS:
db.Tasks.find({ $and: [{ date: { $gte: "2020-10-15", $lte: "2020-10-31" } }, { isSubmitted: false }] })
OUTPUT:
[
    {
        _id: ObjectId('6756bee45dc525daf93ba48b'),
        userId: '02',
        taskName: 'HTML/CSS',
        date: '2020-10-20',
        isSubmitted: false
    }
]

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
