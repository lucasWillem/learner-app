import React from "react";
import PropTypes from "prop-types";

import MuiBox from "@material-ui/core/Box";
import MuiLinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  lessons: {
    listStyle: "none",
    padding: 0,
  },
  lesson: {
    marginTop: theme.spacing(3),
  },
}));

function LearnerProgress({ progress }) {
  const modules = [
    {
      id: 1,
      name: "My Goals",
      lessons: [
        {
          id: 1,
          name: "Being an Entrepreneur",
        },
        {
          id: 2,
          name: "Spend, Save, Share",
        },
        {
          id: 3,
          name: "My Calendar",
        },
      ],
    },
    {
      id: 2,
      name: "My Plan",
      lessons: [
        {
          id: 1,
          name: "Business Plan",
        },
        {
          id: 2,
          name: "My Team",
        },
        {
          id: 3,
          name: "Finding My Location",
        },
        {
          id: 4,
          name: "The Customer",
        },
        {
          id: 5,
          name: "Customer Service",
        },
      ],
    },
    {
      id: 3,
      name: "My Stand",
      lessons: [
        {
          id: 1,
          name: "Getting an Investor",
        },
        {
          id: 2,
          name: "Supply Shopping",
        },
        {
          id: 3,
          name: "Making It Happen",
        },
        {
          id: 4,
          name: "Lemonade Day is Here!",
        },
      ],
    },
  ];
  return (
    <MuiBox display="flex" flexWrap="wrap" justifyContent="space-around" p={4}>
      {modules.map((module) => (
        <ModuleProgress key={module.id} module={module} progress={progress} />
      ))}
    </MuiBox>
  );
}

LearnerProgress.propTypes = {
  progress: PropTypes.arrayOf(
    PropTypes.shape({
      learnerId: PropTypes.string.isRequired,
      moduleId: PropTypes.number.isRequired,
      lessonId: PropTypes.number.isRequired,
      progress: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      completionDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

function ModuleProgress({ module, progress }) {
  const styles = useStyles();
  return (
    <MuiBox>
      <h3>{module.name}</h3>
      <ul className={styles.lessons}>
        {module.lessons.map((lesson) => {
          const lessonProgress = progress.find(
            (p) => p.moduleId === module.id && p.lessonId === lesson.id
          );
          return (
            <LessonProgress
              key={lesson.id}
              lesson={lesson}
              progress={lessonProgress == null ? 0 : lessonProgress.progress}
            />
          );
        })}
      </ul>
    </MuiBox>
  );
}

ModuleProgress.propTypes = {
  module: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  progress: PropTypes.arrayOf(
    PropTypes.shape({
      learnerId: PropTypes.string.isRequired,
      moduleId: PropTypes.number.isRequired,
      lessonId: PropTypes.number.isRequired,
      progress: PropTypes.number.isRequired,
      startDate: PropTypes.string.isRequired,
      completionDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const Progress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 6,
    marginTop: theme.spacing(1),
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[200],
  },
  bar: {
    borderRadius: 6,
    backgroundColor: theme.palette.success.main,
  },
}))(MuiLinearProgress);

function LessonProgress({ lesson, progress }) {
  const styles = useStyles();
  
  return (
    <li className={styles.lesson}>
      <div>{lesson.name}</div>
      <Progress variant="determinate" value={progress * 100} />
    </li>
  );
}

LessonProgress.propTypes = {
  lesson: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  progress: PropTypes.number.isRequired,
};

export default LearnerProgress;
