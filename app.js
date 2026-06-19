(function () {
  'use strict';

  // ---- PRACTICE STATE ----
  let filtered = [];
  let current = 0;
  let mode = 'flashcard';
  let answered = false;
  let score = { correct: 0, total: 0 };

  // ---- EXAM CONFIG (change these to match official exam requirements) ----
  const EXAM_CONFIG = {
    A1A3: { count: 40, time: 30 * 60, passCount: 30, label: 'A1/A3-tentamen' },
    A2:   { count: 30, time: 45 * 60, passCount: 23, label: 'A2-tentamen'    }
  };

  let exam = {
    type: null,    // 'A1A3' | 'A2'
    questions: [],
    answers: [],   // selected option index per question (null = unanswered)
    current: 0,
    timerInterval: null,
    timeLeft: 0,
    startTime: null
  };

  // ---- PRACTICE DOM ----
  const flashContainer   = document.getElementById('flashcard-container');
  const quizContainer    = document.getElementById('quiz-container');
  const emptyState       = document.getElementById('empty-state');
  const practiceFilters  = document.getElementById('practice-filters');
  const practiceProgress = document.getElementById('practice-progress');
  const practiceNav      = document.getElementById('practice-nav');

  const card           = document.getElementById('card');
  const flashImg       = document.getElementById('flash-img');
  const flashChapter   = document.getElementById('flash-chapter');
  const flashQuestion  = document.getElementById('flash-question');
  const flashAnswer    = document.getElementById('flash-answer');

  const quizImg        = document.getElementById('quiz-img');
  const quizChapter    = document.getElementById('quiz-chapter');
  const quizQuestion   = document.getElementById('quiz-question');
  const optionsGrid    = document.getElementById('options-grid');
  const quizFeedback   = document.getElementById('quiz-feedback');

  const progressBar    = document.getElementById('progress-bar');
  const progressLabel  = document.getElementById('progress-label');
  const scoreLabel     = document.getElementById('score-label');

  const btnPrev        = document.getElementById('btn-prev');
  const btnNext        = document.getElementById('btn-next');
  const btnShuffle     = document.getElementById('btn-shuffle');
  const levelSelect    = document.getElementById('level-select');
  const chapterSelect  = document.getElementById('chapter-select');
  const modeButtons    = document.querySelectorAll('.mode-btn');

  // ---- EXAM DOM ----
  const examContainer       = document.getElementById('exam-container');
  const examStartScreen     = document.getElementById('exam-start-screen');
  const examQuestionScreen  = document.getElementById('exam-question-screen');
  const examResultsScreen   = document.getElementById('exam-results-screen');
  const examProgressText    = document.getElementById('exam-progress-text');
  const examTimerEl         = document.getElementById('exam-timer');
  const examPbar            = document.getElementById('exam-pbar');
  const examImg             = document.getElementById('exam-img');
  const examChapterBadge    = document.getElementById('exam-chapter-badge');
  const examQuestionText    = document.getElementById('exam-question-text');
  const examOptionsGrid     = document.getElementById('exam-options-grid');
  const btnExamNext         = document.getElementById('btn-exam-next');
  const btnExamRestart      = document.getElementById('btn-exam-restart');
  const btnExamReview       = document.getElementById('btn-exam-review');
  const btnExitExam         = document.getElementById('btn-exit-exam');
  const examReviewList      = document.getElementById('exam-review-list');

  // ---- SHARED UTIL ----
  function setImage(imgEl, wrapEl, src) {
    if (src) {
      imgEl.src = src;
      imgEl.classList.remove('hidden');
      wrapEl.style.display = '';
    } else {
      imgEl.src = '';
      imgEl.classList.add('hidden');
      wrapEl.style.display = 'none';
    }
  }

  function fisherYates(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ==================== PRACTICE MODE ====================

  function filterQuestions() {
    const lvl = levelSelect.value;
    const ch  = chapterSelect.value;

    filtered = questions.filter(q => {
      const levelOk = lvl === 'all' || q.level === lvl;
      const chOk    = ch === 'all'  || q.category === ch;
      return levelOk && chOk;
    });

    current = 0;
    answered = false;
    score = { correct: 0, total: 0 };
    render();
  }

  function render() {
    if (mode === 'exam') return;

    const isEmpty = filtered.length === 0;
    flashContainer.classList.toggle('hidden', isEmpty || mode !== 'flashcard');
    quizContainer.classList.toggle('hidden',  isEmpty || mode !== 'quiz');
    emptyState.classList.toggle('hidden', !isEmpty);
    btnPrev.disabled = current === 0 || isEmpty;
    btnNext.disabled = isEmpty;

    if (isEmpty) {
      progressLabel.textContent = '0 / 0';
      progressBar.style.width = '0%';
      scoreLabel.classList.add('hidden');
      return;
    }

    updateProgress();
    const q = filtered[current];
    if (mode === 'flashcard') renderFlashcard(q);
    else renderQuiz(q);
  }

  function updateProgress() {
    const total = filtered.length;
    const pos   = total > 0 ? current + 1 : 0;
    progressLabel.textContent = `${pos} / ${total}`;
    progressBar.style.width   = total > 0 ? `${(pos / total) * 100}%` : '0%';

    if (mode === 'quiz') {
      scoreLabel.classList.remove('hidden');
      const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
      scoreLabel.textContent = `Rätt: ${score.correct}/${score.total} (${pct}%)`;
    } else {
      scoreLabel.classList.add('hidden');
    }
  }

  function renderFlashcard(q) {
    card.classList.remove('flipped');
    flashChapter.textContent = q.categoryName;
    flashQuestion.textContent = q.question;
    flashAnswer.textContent   = q.answer;
    setImage(flashImg, flashImg.parentElement, q.image || null);
  }

  function renderQuiz(q) {
    quizFeedback.classList.add('hidden');
    quizFeedback.className = 'quiz-feedback hidden';
    quizChapter.textContent  = q.categoryName;
    quizQuestion.textContent = q.question;
    setImage(quizImg, quizImg.parentElement, q.image || null);
    answered = false;
    buildOptions(q);
  }

  function buildOptions(q) {
    optionsGrid.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => selectOption(i, q));
      optionsGrid.appendChild(btn);
    });
  }

  function selectOption(index, q) {
    if (answered) return;
    answered = true;
    score.total++;

    const buttons = optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(b => { b.disabled = true; });

    if (index === q.correctIndex) {
      buttons[index].classList.add('correct');
      score.correct++;
      quizFeedback.textContent = 'Rätt!';
      quizFeedback.className = 'quiz-feedback correct';
    } else {
      buttons[index].classList.add('incorrect');
      buttons[q.correctIndex].classList.add('reveal');
      quizFeedback.textContent = `Fel. Rätt svar: ${q.options[q.correctIndex]}`;
      quizFeedback.className = 'quiz-feedback incorrect';
    }

    quizFeedback.classList.remove('hidden');
    updateProgress();
  }

  function navigate(dir) {
    if (filtered.length === 0) return;
    const next = current + dir;
    if (next < 0 || next >= filtered.length) return;
    current = next;
    answered = false;
    render();
  }

  function shuffle() {
    filtered = fisherYates(filtered);
    current = 0;
    answered = false;
    score = { correct: 0, total: 0 };
    render();
  }

  function setMode(newMode) {
    const leavingExam = mode === 'exam' && newMode !== 'exam';
    const enteringExam = newMode === 'exam';

    // Stop exam timer if switching away
    if (leavingExam) {
      clearInterval(exam.timerInterval);
    }

    mode = newMode;
    modeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === newMode);
    });

    if (enteringExam) {
      // Show exam, hide practice chrome
      examContainer.classList.remove('hidden');
      practiceFilters.classList.add('hidden');
      practiceProgress.classList.add('hidden');
      practiceNav.classList.add('hidden');
      flashContainer.classList.add('hidden');
      quizContainer.classList.add('hidden');
      emptyState.classList.add('hidden');
      // Always show start screen when entering exam mode
      examStartScreen.classList.remove('hidden');
      examQuestionScreen.classList.add('hidden');
      examResultsScreen.classList.add('hidden');
    } else {
      // Show practice chrome, hide exam
      examContainer.classList.add('hidden');
      practiceFilters.classList.remove('hidden');
      practiceProgress.classList.remove('hidden');
      practiceNav.classList.remove('hidden');
      current = 0;
      answered = false;
      score = { correct: 0, total: 0 };
      render();
    }
  }

  // ==================== EXAM MODE ====================

  function startExam(type) {
    const cfg  = EXAM_CONFIG[type];
    const pool = fisherYates(
      questions.filter(q =>
        type === 'A2'
          ? q.level === 'A2'
          : (q.level === 'both' || q.level === 'A1A3')
      )
    );
    exam.type      = type;
    exam.questions = pool.slice(0, Math.min(cfg.count, pool.length));
    exam.answers   = new Array(exam.questions.length).fill(null);
    exam.current   = 0;
    exam.timeLeft  = cfg.time;
    exam.startTime = Date.now();

    examStartScreen.classList.add('hidden');
    examResultsScreen.classList.add('hidden');
    examQuestionScreen.classList.remove('hidden');
    examReviewList.classList.add('hidden');

    startExamTimer();
    renderExamQuestion();
  }

  function startExamTimer() {
    clearInterval(exam.timerInterval);
    updateTimerDisplay();
    exam.timerInterval = setInterval(() => {
      exam.timeLeft--;
      updateTimerDisplay();
      if (exam.timeLeft <= 0) {
        clearInterval(exam.timerInterval);
        endExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const m = Math.floor(exam.timeLeft / 60);
    const s = exam.timeLeft % 60;
    examTimerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    examTimerEl.classList.toggle('warning', exam.timeLeft < 5 * 60);
  }

  function renderExamQuestion() {
    const i = exam.current;
    const q = exam.questions[i];
    const total = exam.questions.length;

    examProgressText.textContent = `Fråga ${i + 1} av ${total}`;
    examPbar.style.width = `${((i + 1) / total) * 100}%`;
    examChapterBadge.textContent = q.categoryName;
    examQuestionText.textContent = q.question;
    setImage(examImg, examImg.parentElement, q.image || null);

    buildExamOptions(q, i);

    btnExamNext.disabled = exam.answers[i] === null;
    btnExamNext.textContent = i === total - 1 ? 'Avsluta prov' : 'Nästa →';
  }

  function buildExamOptions(q, qIndex) {
    const labels = ['A', 'B', 'C', 'D'];
    examOptionsGrid.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (exam.answers[qIndex] === i) btn.classList.add('selected');

      const label = document.createElement('span');
      label.className = 'option-label';
      label.textContent = labels[i];

      btn.appendChild(label);
      btn.appendChild(document.createTextNode(opt));
      btn.addEventListener('click', () => selectExamOption(i, qIndex));
      examOptionsGrid.appendChild(btn);
    });
  }

  function selectExamOption(optIndex, qIndex) {
    exam.answers[qIndex] = optIndex;
    buildExamOptions(exam.questions[qIndex], qIndex);
    btnExamNext.disabled = false;
  }

  function nextExamQuestion() {
    if (exam.current >= exam.questions.length - 1) {
      endExam();
    } else {
      exam.current++;
      renderExamQuestion();
    }
  }

  function endExam() {
    clearInterval(exam.timerInterval);
    const elapsed = Math.floor((Date.now() - exam.startTime) / 1000);

    examQuestionScreen.classList.add('hidden');
    examResultsScreen.classList.remove('hidden');

    renderExamResults(elapsed);
  }

  function renderExamResults(elapsed) {
    const qs = exam.questions;
    let correct = 0;
    qs.forEach((q, i) => {
      if (exam.answers[i] === q.correctIndex) correct++;
    });

    const total  = qs.length;
    const pct    = Math.round((correct / total) * 100);
    const passed = correct >= EXAM_CONFIG[exam.type].passCount;

    const verdictEl = document.getElementById('exam-verdict');
    verdictEl.textContent = passed ? 'GODKÄND' : 'UNDERKÄND';
    verdictEl.className   = `exam-verdict ${passed ? 'pass' : 'fail'}`;

    document.getElementById('exam-score-num').textContent = `${correct} / ${total}`;
    document.getElementById('exam-score-pct').textContent = `${pct}%`;

    const em = Math.floor(elapsed / 60);
    const es = elapsed % 60;
    document.getElementById('exam-time-used').textContent =
      `Tid: ${String(em).padStart(2, '0')}:${String(es).padStart(2, '0')}`;

    // Chapter breakdown
    const breakdown = {};
    qs.forEach((q, i) => {
      if (!breakdown[q.categoryName]) breakdown[q.categoryName] = { correct: 0, total: 0 };
      breakdown[q.categoryName].total++;
      if (exam.answers[i] === q.correctIndex) breakdown[q.categoryName].correct++;
    });

    const breakdownEl = document.getElementById('exam-chapter-breakdown');
    breakdownEl.innerHTML = '';
    Object.entries(breakdown).forEach(([cat, stats]) => {
      const ratio = stats.correct / stats.total;
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      const catSpan = document.createElement('span');
      catSpan.className = 'breakdown-cat';
      catSpan.textContent = cat;
      const scoreSpan = document.createElement('span');
      scoreSpan.className = `breakdown-score${ratio < EXAM_PASS ? ' weak' : ''}`;
      scoreSpan.textContent = `${stats.correct}/${stats.total}`;
      row.appendChild(catSpan);
      row.appendChild(scoreSpan);
      breakdownEl.appendChild(row);
    });

    // Wire up review toggle
    examReviewList.classList.add('hidden');
    examReviewList.innerHTML = '';
    btnExamReview.textContent = 'Granska svar';
  }

  function toggleExamReview() {
    if (!examReviewList.classList.contains('hidden')) {
      examReviewList.classList.add('hidden');
      btnExamReview.textContent = 'Granska svar';
      return;
    }

    if (examReviewList.innerHTML === '') {
      buildExamReview();
    }
    examReviewList.classList.remove('hidden');
    btnExamReview.textContent = 'Dölj genomgång';
  }

  function buildExamReview() {
    const labels = ['A', 'B', 'C', 'D'];
    exam.questions.forEach((q, qi) => {
      const userAns  = exam.answers[qi];
      const isRight  = userAns === q.correctIndex;

      const item = document.createElement('div');
      item.className = `exam-review-item ${isRight ? 'correct' : 'incorrect'}`;

      const header = document.createElement('div');
      header.className = 'review-q-header';
      header.innerHTML = `<span class="review-num">Fråga ${qi + 1}</span><span class="review-status">${isRight ? '✓' : '✗'}</span>`;

      const qText = document.createElement('p');
      qText.className = 'review-q-text';
      qText.textContent = q.question;

      item.appendChild(header);
      item.appendChild(qText);

      q.options.forEach((opt, oi) => {
        const optEl = document.createElement('div');
        let cls = 'review-opt';
        if (oi === q.correctIndex)             cls += ' review-opt-correct';
        else if (oi === userAns && !isRight)   cls += ' review-opt-incorrect';
        optEl.className = cls;

        const lbl = document.createElement('span');
        lbl.className = 'option-label';
        lbl.textContent = labels[oi];
        optEl.appendChild(lbl);
        optEl.appendChild(document.createTextNode(opt));
        item.appendChild(optEl);
      });

      examReviewList.appendChild(item);
    });
  }

  // ==================== INIT ====================
  function init() {
    // Practice controls
    btnPrev.addEventListener('click', () => navigate(-1));
    btnNext.addEventListener('click', () => navigate(1));
    btnShuffle.addEventListener('click', shuffle);
    levelSelect.addEventListener('change', filterQuestions);
    chapterSelect.addEventListener('change', filterQuestions);

    modeButtons.forEach(btn => {
      btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });

    card.addEventListener('click', () => {
      if (mode !== 'flashcard') return;
      card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });

    document.addEventListener('keydown', e => {
      if (mode === 'exam') return;
      if (e.target === card) return;
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft')  navigate(-1);
    });

    // Exam controls
    document.getElementById('btn-start-a1a3').addEventListener('click', () => startExam('A1A3'));
    document.getElementById('btn-start-a2').addEventListener('click',   () => startExam('A2'));
    btnExamNext.addEventListener('click', nextExamQuestion);
    btnExamReview.addEventListener('click', toggleExamReview);
    btnExamRestart.addEventListener('click', () => {
      examResultsScreen.classList.add('hidden');
      examReviewList.classList.add('hidden');
      examReviewList.innerHTML = '';
      examStartScreen.classList.remove('hidden');
    });
    btnExitExam.addEventListener('click', () => setMode('flashcard'));

    filterQuestions();

    // Disclaimer
    const disclaimerOverlay = document.getElementById('disclaimer-overlay');
    if (!localStorage.getItem('disclaimer_accepted')) {
      disclaimerOverlay.classList.remove('hidden');
    } else {
      disclaimerOverlay.classList.add('hidden');
    }
    document.getElementById('btn-disclaimer-accept').addEventListener('click', () => {
      localStorage.setItem('disclaimer_accepted', '1');
      disclaimerOverlay.classList.add('hidden');
    });
  }

  init();
})();
