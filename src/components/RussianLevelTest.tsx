import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, X, RotateCcw, Award, BookOpen } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  level: string;
  points: number;
}

const RussianLevelTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const { toast } = useToast();

  const questions: Question[] = [
    {
      id: 1,
      question: "Como se diz 'Olá' em russo?",
      options: ["Привет", "Спасибо", "До свидания", "Пожалуйста"],
      correct: 0,
      level: "A1",
      points: 1
    },
    {
      id: 2,
      question: "Qual é a forma correta do verbo 'ser' na primeira pessoa do singular?",
      options: ["я есть", "я был", "я буду", "All above can be correct depending on context"],
      correct: 3,
      level: "A1",
      points: 2
    },
    {
      id: 3,
      question: "Como se forma o plural de 'студент' (estudante)?",
      options: ["студенты", "студенти", "студентов", "студента"],
      correct: 0,
      level: "A1",
      points: 2
    },
    {
      id: 4,
      question: "Qual é a tradução de 'Я изучаю русский язык'?",
      options: ["Eu falo russo", "Eu estudo russo", "Eu ensino russo", "Eu gosto de russo"],
      correct: 1,
      level: "A2",
      points: 2
    },
    {
      id: 5,
      question: "Escolha a forma correta: 'Вчера я _____ в театр'",
      options: ["иду", "пойду", "ходил", "ехал"],
      correct: 2,
      level: "A2",
      points: 3
    },
    {
      id: 6,
      question: "Qual caso é usado após a preposição 'в' com direção?",
      options: ["Nominativo", "Genitivo", "Acusativo", "Instrumental"],
      correct: 2,
      level: "A2",
      points: 3
    },
    {
      id: 7,
      question: "Como se diz 'livro da minha irmã' em russo?",
      options: ["книга моя сестра", "книга моей сестры", "книгу моей сестре", "книги моей сестры"],
      correct: 1,
      level: "B1",
      points: 4
    },
    {
      id: 8,
      question: "Qual é a diferença entre 'покупать' e 'купить'?",
      options: ["São sinônimos", "Aspecto imperfectivo vs perfectivo", "Presente vs passado", "Não há diferença"],
      correct: 1,
      level: "B1",
      points: 4
    },
    {
      id: 9,
      question: "Complete: 'Если бы я _____ деньги, я бы купил машину'",
      options: ["имею", "имел", "буду иметь", "имел бы"],
      correct: 1,
      level: "B1",
      points: 4
    },
    {
      id: 10,
      question: "Qual verbo de movimento usar: 'Каждый день я _____ на работу на автобусе'",
      options: ["иду", "еду", "лечу", "плыву"],
      correct: 1,
      level: "B1",
      points: 4
    },
    {
      id: 11,
      question: "Qual é o significado de 'Мне не до шуток'?",
      options: ["Eu não gosto de piadas", "Não estou para brincadeiras", "Eu não entendo piadas", "Eu não sei piadas"],
      correct: 1,
      level: "B2",
      points: 5
    },
    {
      id: 12,
      question: "Escolha a forma correta do particípio passivo: 'Письмо _____ вчера'",
      options: ["написано", "написанное", "написав", "написать"],
      correct: 0,
      level: "B2",
      points: 5
    },
    {
      id: 13,
      question: "Qual preposição usar: 'Он работает _____ врачом'",
      options: ["как", "в качестве", "кем", "Nenhuma preposição necessária"],
      correct: 3,
      level: "B2",
      points: 5
    },
    {
      id: 14,
      question: "O que significa 'Дождичек вымочит, солнышко высушит'?",
      options: ["Provérbio sobre tempo", "Tudo tem solução", "A natureza é sábia", "Paciência é importante"],
      correct: 1,
      level: "B2",
      points: 5
    },
    {
      id: 15,
      question: "Qual é a forma correta do gerúndio: 'Читая книгу, он _____ заметки'",
      options: ["делает", "сделал", "делал", "будет делать"],
      correct: 2,
      level: "C1",
      points: 6
    },
    {
      id: 16,
      question: "Complete com o conectivo correto: '_____ он устал, он продолжал работать'",
      options: ["Потому что", "Хотя", "Если", "Когда"],
      correct: 1,
      level: "C1",
      points: 6
    },
    {
      id: 17,
      question: "Qual é o significado de 'работать спустя рукава'?",
      options: ["Trabalhar com as mangas arregaçadas", "Trabalhar mal/sem dedicação", "Trabalhar rapidamente", "Trabalhar com cuidado"],
      correct: 1,
      level: "C1",
      points: 6
    },
    {
      id: 18,
      question: "Escolha a forma estilística mais apropriada para texto acadêmico:",
      options: ["Этот вопрос классный", "Данный вопрос представляется актуальным", "Этот вопрос прикольный", "Вопрос этот хороший"],
      correct: 1,
      level: "C1",
      points: 6
    },
    {
      id: 19,
      question: "Qual é a diferença semântica entre 'смотреть' e 'глядеть'?",
      options: ["Não há diferença", "смотреть mais neutro, глядеть mais emocional/expressivo", "смотреть é coloquial", "глядеть é mais formal"],
      correct: 1,
      level: "C2",
      points: 7
    },
    {
      id: 20,
      question: "Complete a citação de Pushkin: 'Мороз и солнце; день _____!'",
      options: ["прекрасный", "чудесный", "великолепный", "замечательный"],
      correct: 1,
      level: "C2",
      points: 7
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Selecione uma resposta",
        description: "Por favor, escolha uma opção antes de continuar.",
        variant: "destructive"
      });
      return;
    }

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    let totalPoints = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        totalPoints += questions[index].points;
      }
    });

    const maxPoints = questions.reduce((sum, q) => sum + q.points, 0);
    const percentage = (totalPoints / maxPoints) * 100;

    let level = "A1";
    let levelName = "Iniciante";
    let description = "Você está começando sua jornada no russo.";
    let recommendation = "Recomendamos começar com nosso curso A1.";

    if (percentage >= 85) {
      level = "C2";
      levelName = "Proficiência";
      description = "Excelente! Você tem domínio quase nativo do russo.";
      recommendation = "Você pode se interessar por nossos cursos de especialização ou aulas de conversação avançada.";
    } else if (percentage >= 75) {
      level = "C1";
      levelName = "Avançado Superior";
      description = "Muito bom! Você tem conhecimento avançado do russo.";
      recommendation = "Nosso curso C1-C2 será ideal para aperfeiçoar sua fluência.";
    } else if (percentage >= 60) {
      level = "B2";
      levelName = "Intermediário Superior";
      description = "Parabéns! Você tem uma boa base no russo.";
      recommendation = "Recomendamos nosso curso B2 para aprimorar suas habilidades.";
    } else if (percentage >= 45) {
      level = "B1";
      levelName = "Intermediário";
      description = "Bom trabalho! Você já sabe o básico do russo.";
      recommendation = "Nosso curso B1-B2 será perfeito para você avançar.";
    } else if (percentage >= 25) {
      level = "A2";
      levelName = "Elementar";
      description = "Você tem conhecimentos básicos do russo.";
      recommendation = "Sugerimos continuar com nosso curso A2.";
    }

    return {
      level,
      levelName,
      description,
      recommendation,
      score: totalPoints,
      maxScore: maxPoints,
      percentage: Math.round(percentage),
      correctAnswers: answers.filter((answer, index) => answer === questions[index].correct).length
    };
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setTestStarted(false);
  };

  const startTest = () => {
    setTestStarted(true);
  };

  const result = showResult ? calculateResult() : null;

  if (!testStarted) {
    return (
      <Card className="max-w-2xl mx-auto border-0 shadow-elegant bg-russian-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-russian-white" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Teste de Nivelamento em Russo
          </CardTitle>
          <p className="text-muted-foreground text-base leading-relaxed">
            Descubra seu nível atual no idioma russo com nosso teste profissional de 20 questões.
            O teste avalia vocabulário, gramática e compreensão.
          </p>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <div className="space-y-6">
            <div className="bg-gradient-accent rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">O que você vai descobrir:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Seu nível atual (A1, A2, B1, B2, C1, C2)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Pontos fortes e áreas para melhorar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Recomendação personalizada de curso</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Certificado digital do resultado</span>
                </li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <span>⏱️ 15-20 minutos</span>
                <span>📝 20 questões</span>
                <span>🎯 100% gratuito</span>
              </div>
              
              <Button 
                onClick={startTest}
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 text-russian-white h-14 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                🚀 Iniciar Teste de Nivelamento
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Teste desenvolvido por professores nativos especializados em ensino de russo para brasileiros
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showResult && result) {
    return (
      <Card className="max-w-2xl mx-auto border-0 shadow-elegant bg-russian-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-10 h-10 text-russian-white" />
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Resultado do Seu Teste
          </CardTitle>
          <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">
            Nível {result.level} - {result.levelName}
          </Badge>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <div className="space-y-6">
            {/* Score */}
            <div className="text-center bg-gradient-accent rounded-lg p-6">
              <div className="text-4xl font-bold text-foreground mb-2">
                {result.percentage}%
              </div>
              <p className="text-muted-foreground mb-4">
                {result.correctAnswers} de {questions.length} questões corretas
              </p>
              <Progress value={result.percentage} className="w-full h-3" />
            </div>

            {/* Description */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">Análise do Resultado:</h4>
              <p className="text-muted-foreground mb-4">{result.description}</p>
              <p className="text-muted-foreground">{result.recommendation}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={() => {
                  toast({
                    title: "Redirecionando...",
                    description: "Vamos conversar sobre o curso ideal para você!",
                  });
                  setTimeout(() => {
                    window.open(`https://wa.me/79116192160?text=Oi! Acabei de fazer o teste de nivelamento e meu resultado foi nível ${result.level}. Gostaria de saber mais sobre os cursos adequados para mim.`, '_blank');
                  }, 1500);
                }}
                className="w-full bg-gradient-primary hover:opacity-90 text-russian-white h-12 font-semibold"
              >
                💬 Falar com Professor Sobre Meu Nível
              </Button>
              
              <Button 
                variant="outline" 
                onClick={resetTest}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Refazer Teste
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground">
              🎁 Resultado válido para 20% de desconto na matrícula
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="max-w-2xl mx-auto border-0 shadow-elegant bg-russian-white/95 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="text-sm">
            Questão {currentQuestion + 1} de {questions.length}
          </Badge>
          <Badge className="bg-primary text-primary-foreground">
            Nível {questions[currentQuestion].level}
          </Badge>
        </div>
        <Progress value={progress} className="w-full h-2 mb-4" />
        <CardTitle className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
          {questions[currentQuestion].question}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                selectedAnswer === index
                  ? 'border-primary bg-primary/10 text-primary font-medium'
                  : 'border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswer === index
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border'
                }`}>
                  <span className="text-sm font-semibold">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <span className="text-sm md:text-base">{option}</span>
              </div>
            </button>
          ))}
        </div>

        <Button 
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="w-full bg-gradient-primary hover:opacity-90 text-russian-white h-12 font-semibold disabled:opacity-50"
        >
          {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RussianLevelTest;