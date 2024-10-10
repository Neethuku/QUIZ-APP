import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { data } from './assets/data';

function App() {
  const [index, setIndex] = useState(0);
  const [Qdata, setQdata] = useState(data[index]);
  const [showScore, setShowScore] = useState(false);
  const [ansSelected, setAnsSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const totalQuestions = data.length;

  const handleOption = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    if (selectedOption === data[index].ans) {
      setScore((prevScore) => prevScore + 1);
      console.log("correct");
    } else {
      console.log("incorrect");
    }
    setAnsSelected(true);
  };

  const handleNext = () => {
    setIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < totalQuestions) {
        setQdata(data[nextIndex]);
      } else {
        setShowScore(true);
      }
      return nextIndex;
    });
    setAnsSelected(false);
    setSelectedAnswer(null);
  };

  const handleReset = () => {
    setShowScore(false);
    setIndex(0);
    setScore(0);
    setAnsSelected(false);
    setSelectedAnswer(null);
    setQdata(data[0]);
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center ">
        <div className="row w-100">
          <div className="col-12 col-md-3 text-white text-center py-3"></div>
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center py-3">
            <Card style={{ width: '37rem' }} className="px-3">
              <Card.Body>
                <Card.Title
                style={{ fontSize: '28px', fontWeight: 'bold', color: '#19006C' }}
                >QUIZIFY</Card.Title>
                {showScore && (
                  <div>
                    <hr />
                    <h3 style={{ color: '#19006C' }}>Your Score: {score} out of {totalQuestions}</h3>
                    <Button 
                    className="next-button" 
                    style={{ width: '200px' }} 
                    onClick={handleReset}>
                    Reset
                    </Button>
                  </div>
                )}
                {!showScore && (
                  <div>
                    <div style={{ color: '#19006C' }} className="mt-3 d-flex">
                      <h4>{index + 1}. {Qdata.question}</h4>
                    </div>

                    <div className="mt-3">
                      <Button
                        variant="outline-primary"
                        className="w-100 mb-3 button-style text-start"
                        disabled={ansSelected}
                        onClick={() => handleOption(Qdata.option1)}
                        style={{
                          backgroundColor: selectedAnswer === Qdata.option1
                            ? (Qdata.option1 === data[index].ans ? '  #cbf8e6' : ' #f8d7d7')
                            : 'transparent',

                        }}
                      >
                        {Qdata.option1}
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="w-100 mb-3 button-style text-start"
                        disabled={ansSelected}
                        onClick={() => handleOption(Qdata.option2)}
                        style={{
                          backgroundColor: selectedAnswer === Qdata.option2
                            ? (Qdata.option2 === data[index].ans ? '  #cbf8e6' : ' #f8d7d7')
                            : 'transparent',

                        }}
                      >
                        {Qdata.option2}
                      </Button>
                      <Button
                        variant="outline-primary"
                        className="w-100 mb-3 button-style text-start"
                        disabled={ansSelected}
                        onClick={() => handleOption(Qdata.option3)}
                        style={{
                          backgroundColor: selectedAnswer === Qdata.option3
                            ? (Qdata.option3 === data[index].ans ? '  #cbf8e6' : ' #f8d7d7')
                            : 'transparent',

                        }}
                      >
                        {Qdata.option3}
                      </Button>

                      <Button
                        variant="outline-primary"
                        className="w-100 mb-3 button-style text-start"
                        disabled={ansSelected}
                        onClick={() => handleOption(Qdata.option4)}
                        style={{
                          backgroundColor: selectedAnswer === Qdata.option4
                            ? (Qdata.option4 === data[index].ans ? '  #cbf8e6' : ' #f8d7d7')
                            : 'transparent',

                        }}
                      >
                        {Qdata.option4}
                      </Button>
                    </div>

                    <Button 
                    className="next-button" 
                    style={{ width: '200px' }} 
                    disabled={!ansSelected} 
                    onClick={handleNext}>
                      Next
                    </Button>
                    <p style={{ color: '#19006C' }} className="mt-2">
                      {index + 1} of {totalQuestions} questions
                    </p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-3 text-white text-center py-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
