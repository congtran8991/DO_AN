import React from 'react';
import Login from '../components/login';
import CreateTest from './createTest';
import AcademicManagement from './academicManagement';
import AssessKnowledge from './assessKnowledge';
import Test from './test';
import FinishExam from './finishExam';
import Evaluate from './Evaluate';
import NotFound from './notFound';
import ShowExamAnswers from './showExamAnswers';
import ListContent from './listContent';
import ContactFeedback from './contactFeedback';
import Account from './updateAccount';
import Home from './Home';
import Theory from './theory';
import EducationalNews from './educationalNews';
export const routers = [
    {
        path: "/Login",
        exact: true,
        main: < Login />
    },
    {
        path: "/createTest",
        exact: true,
        main: < CreateTest />
    },
    {
        path: "/academicManagement/:user/:id",
        exact: true,
        main: < Evaluate />
    },
    {
        path: "/academicManagement",
        exact: true,
        main: < AcademicManagement />
    },
    {
        path: "/assesKnowledge",
        exact: true,
        main: < AssessKnowledge />
    },
    {
        path: "/test",
        exact: true,
        main: < Test />
    },
    {
        path: "/finishExam",
        exact: true,
        main: <FinishExam />
    },
    {
        path: "/finishExam/dapan",
        exact: false,
        main: <ShowExamAnswers />
    },
    {
        path: "/listContent",
        exact: false,
        main: <ListContent />
    },
    {
        path: "/Home",
        exact: false,
        main: <Home />
    },
    {
        path: "/",
        exact: true,
        main: <Home />
    },
    {
        path: "/contactFeedback",
        exact: false,
        main: <ContactFeedback />
    },
    {
        path: "/theory",
        exact: false,
        main: <Theory />
    },
    {
        path: "/Account",
        exact: false,
        main: <Account />
    },
    {
        path: "/news",
        exact: false,
        main: <EducationalNews />
    },
    {
        path: null,
        exact: null,
        main: < NotFound />
    }
];