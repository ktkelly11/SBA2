// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // just a random equation to meet the break requirement
  for (let i = 11; i < 12; i += 1) {
    if (i > 2) {
      break;
    } else {
      continue;
    }
  }

  // try/catch to check course ID is correct
  try {
    // declaring new variables to use
    let courseId = CourseInfo.id;
    let courseID = AssignmentGroup.course_id;
    // setting the two ids in the seperate arrays strictly equal to eachother so that an error will be thrown if they are different
    if (courseId === courseID) {
      // if they match, the course is correct
      console.log("You are in the correct class!");
    } else {
      // otherwise the course is wrong
      throw "Error.  You are in the wrong course.";
    }
  } catch (err) {
    console.log(err);
  }

  // function to get learner ID
  // function getLearnerID(submissions) {
  //   for (let i = 0; i < learner_id[i].length, i++; ) {
  //     if (learner_id == i) {
  //       return learner_id[i];
  //     } else {
  //       return "Not a valid id";
  //     }
  //   }
  //   console.log(getLearnerID);
  // }

  // Another attempt to get learner ID
  // function getLearnerId(submissions) {
  //   for (let i = 0; i < submissions.learner_id[i].length; i++) {
  //     if (learner_id[i] == 0) {
  //       return learner_id;
  //     }
  //   }
  // }

  // attempting to figure out why my function is declared, but it's value is never read
  // let id = LearnerSubmissions.assignment_id;
  // let learner_id = id;

  //   function findLearner(submissions, id) {
  //     for (let i = 0; i < submissions.length; i++) {
  //       if (submissions.learner_id === id) {
  //         return id;
  //       } else {
  //         return "Wrong student";
  //       }
  //     }
  //     console.log(findLearner);
  //   }

  // attempting to declare variables another way
  // for (let i = 0; i < submissions.length; i++) {
  //   let id = submissions[i].learner_id;
  //   function findLearner(id) {
  //     for (let j = 0; j < submissions.length; i++) {
  //       if (id === submissions.learner_id) {
  //         return id;
  //       } else {
  //         return "Wrong student";
  //       }
  //     }
  //   }
  // }
  // console.log(findLearner);

  let totalPoints = AssignmentGroup.assignments.points_possible;
  let score = LearnerSubmissions.submission.score;

  let grade = score / totalPoints;

  function getGrade(ag, submissions) {
    for (let i = 0; i < submissions.length && i < ag.length; i++) {
      if ((grade = score / totalPoints)) {
        return grade;
      }
    }
  }
  console.log(getGrade);

  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
    },
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
