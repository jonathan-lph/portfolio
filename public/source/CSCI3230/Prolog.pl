% ---------- Winning Rows ----------

win([ 1,  7, 13, 19, 25]).  % Vertical
win([ 2,  8, 14, 20, 26]).
win([ 3,  9, 15, 21, 27]).
win([ 4, 10, 16, 22, 28]).
win([ 5, 11, 17, 23, 29]).
win([ 6, 12, 18, 24, 30]).
win([ 7, 13, 19, 25, 31]).
win([ 8, 14, 20, 26, 32]).
win([ 9, 15, 21, 27, 33]).
win([10, 16, 22, 28, 34]).
win([11, 17, 23, 29, 35]).
win([12, 18, 24, 30, 36]).
win([ 1,  2,  3,  4,  5]).  % Horizontal 
win([ 2,  3,  4,  5,  6]).
win([ 7,  8,  9, 10, 11]).
win([ 8,  9, 10, 11, 12]).
win([13, 14, 15, 16, 17]).
win([14, 15, 16, 17, 18]).
win([19, 20, 21, 22, 23]).
win([20, 21, 22, 23, 24]).
win([25, 26, 27, 28, 29]).
win([26, 27, 28, 29, 30]).
win([31, 32, 33, 34, 35]).
win([32, 33, 34, 35, 36]).
win([ 1,  8, 15, 22, 29]).  % LR-Diagonal
win([ 2,  9, 16, 23, 30]).
win([ 7, 14, 21, 28, 35]).
win([ 8, 15, 22, 29, 36]).
win([ 5, 10, 15, 20, 25]).  % RL-Diagonal
win([ 6, 11, 16, 21, 26]).
win([11, 16, 21, 26, 31]).
win([12, 17, 22, 27, 32]).

quadrant(top-left).
quadrant(top-right).
quadrant(bottom-left).
quadrant(bottom-right).

rotation(clockwise).
rotation(anti-clockwise).

other(board(BlackL, RedL), black, red, BlackL, RedL).
other(board(BlackL, RedL), red, black, RedL, BlackL).

% ---------- Threatening ----------

contains([], _, 0).
contains([H|T], List, C) :-
    contains(T, List, E),
    ((member(H, List), C is E+1); C = E), !.

threaten(WinCond, CurrL, CompL) :-
    win(WinCond), ord_union(CurrL, CompL, CombB),
    contains(WinCond, CompL, CompC), CompC  == 4,  % 4-in-a-row 
    contains(WinCond, CombB, CombC), CombC \== 5.  % fifth is a open slot

threatening(Board, CurrentPlayer, ThreatCount) :-
    other(Board, CurrentPlayer, _CompP, CurrL, CompL),
    aggregate_all(count, threaten(_, CurrL, CompL), ThreatCount), !.

rotationDraw(Board, CurrP, WinCond) :-
    quadrant(Quadrant), rotation(Rotation),
    rotate(Quadrant, Rotation, Board, NBoard),
    other(NBoard, CurrP, _CompP, NCurrL, NCompL), 
    win(WinCond2),
    contains(WinCond2, NCompL, 5),                    % CompP wins after rotation
    win(WinCond), ord_union(NCurrL, NCompL, NCombB),
    contains(WinCond, NCurrL, CurrC), CurrC  == 4,
    contains(WinCond, NCombB, CombC), CombC \== 5, !.    % CurrL can win

% ---------- Rotations ----------

clockwise(_, [], []).
clockwise(Quadrant, [H|T], [NH|NT]) :-
    Quadrant == top-left,  member(H, [1,2,3,7,8,9,13,14,15]),
    NH is mod(H-1,6)*6 + 2-div(H-1,6) + 1, clockwise(Quadrant, T, NT), !;
    Quadrant == top-right, member(H, [4,5,6,10,11,12,16,17,18]),
    NH is mod(H-4,6)*6 + 2-div(H-4,6) + 4, clockwise(Quadrant, T, NT), !;
    Quadrant == bottom-left,  member(H, [19,20,21,25,26,27,31,32,33]),
    NH is mod(H-19,6)*6 + 2-div(H-19,6) + 19, clockwise(Quadrant, T, NT), !;
    Quadrant == bottom-right, member(H, [22,23,24,28,29,30,34,35,36]),
    NH is mod(H-22,6)*6 + 2-div(H-22,6) + 22, clockwise(Quadrant, T, NT), !;
    NH is H, clockwise(Quadrant, T, NT), !.

antiClockwise(_, [], []).
antiClockwise(Quadrant, [H|T], [NH|NT]) :-
    Quadrant == top-left,  member(H, [1,2,3,7,8,9,13,14,15]),
    NH is (2-mod(H-1,6))*6 + div(H-1,6) + 1, antiClockwise(Quadrant, T, NT), !;
    Quadrant == top-right, member(H, [4,5,6,10,11,12,16,17,18]),
    NH is (2-mod(H-4,6))*6 + div(H-4,6) + 4, antiClockwise(Quadrant, T, NT), !;
    Quadrant == bottom-left,  member(H, [19,20,21,25,26,27,31,32,33]),
    NH is (2-mod(H-19,6))*6 + div(H-19,6) + 19, antiClockwise(Quadrant, T, NT), !;
    Quadrant == bottom-right, member(H, [22,23,24,28,29,30,34,35,36]),
    NH is (2-mod(H-22,6))*6 + div(H-22,6) + 22, antiClockwise(Quadrant, T, NT), !;
    % When not member, disregard
    NH is H, antiClockwise(Quadrant, T, NT), !.

rotate(Quadrant, clockwise, board(BlackL, RedL), board(NBlackL, NRedL)):- 
    clockwise(Quadrant, BlackL, R_BlackL),
    clockwise(Quadrant, RedL, R_RedL),
	msort(R_BlackL, NBlackL),
	msort(R_RedL, NRedL).
rotate(Quadrant, anti-clockwise, board(BlackL, RedL), board(NBlackL, NRedL)):- 
    antiClockwise(Quadrant, BlackL, R_BlackL),
    antiClockwise(Quadrant, RedL, R_RedL),
	msort(R_BlackL, NBlackL),
	msort(R_RedL, NRedL).

% ---------- Helper Functions ----------

comb([_], [], _, _CL2, _, []).
comb([H1|T1], [H2|T2], [H3|T3], CL2, CL3, [H|T]) :- 
    comb([H1|T1], [H2|T2], T3, CL2, CL3, T), H = move(H1, H2, H3), !.
comb(L1, [_|T2], [],  CL2, CL3, R) :- comb(L1, T2,  CL3, CL2, CL3, R).
comb([_|T1], [], CL3, CL2, CL3, R) :- comb(T1, CL2, CL3, CL2, CL3, R).
combination(L1, L2, L3, R) :- comb(L1, L2, L3, L2, L3, R).

formatOutput(move(Position, none, none), NBoard, CurrP, BestMove, NextBoard) :-
    BestMove = move(Position, top-left, clockwise),
    win(WinCond), other(NBoard, CurrP, _CompP, CurrL, _CompL),
    contains(WinCond, CurrL, 5),
    NextBoard = board(WinCond, []).
formatOutput(BestMove, NextBoard, _CurrP, BestMove, NextBoard).

% ---------- Helper Functions (Return) ----------

value(Board, CurrP, Value) :-
    other(Board, CurrP, _CompP, _CurrL, CompL),
    (( win(WinCond),  contains(WinCond, CompL, 5),  
       Value = 99, ! );
     threatening(Board, CurrP, Value) ), !.

draw(Board, CurrP) :-
    other(Board, CurrP, _CompP, CurrL, CompL),
    win(WinCond),  contains(WinCond,  CompL, 5), 
    win(WinCond2), contains(WinCond2, CurrL, 5), !.

avlMovesL(board(BlackL, RedL), Depth, AvlMoves) :-
    ord_union(BlackL, RedL, BJ), numlist(1, 36, All),
    ord_subtract(All, BJ, EmptySlots),
    findall(Rotation, rotation(Rotation), RotationL),
	findall(Quadrant, quadrant(Quadrant), QuadrantL),
    combination(EmptySlots, RotationL, QuadrantL, AvlMoves1),
    (( Depth == 0, 
       combination(EmptySlots, [none], [none], AvlMoves2),
       append(AvlMoves1, AvlMoves2, AvlMoves) );
     ( Depth > 0, AvlMoves = AvlMoves1)).

singleMove(Board, CurrP, Move, PR_Board) :-
    other(Board, CurrP, _CompP, CurrL, CompL),
    Move = move(PlaceSlot, Rotation, Quadrant),
    ord_union([PlaceSlot], CurrL, P_CurrL),
    ( ( Rotation == none, PR_CurrL = P_CurrL, PR_CompL = CompL, ! );
      rotate(Quadrant, Rotation, board(P_CurrL, CompL), board(PR_CurrL, PR_CompL)) ),
    ( ( CurrP == black, PR_Board = board(PR_CurrL, PR_CompL) );
      ( CurrP == red  , PR_Board = board(PR_CompL, PR_CurrL) )), !.

allMove(_Board, _CurrP, [], []).
allMove(Board, CurrP, [Move|Moves], NBoard) :-
    singleMove(Board, CurrP, Move, NBoardS),
    allMove(Board, CurrP, Moves, NBoardL),
    NBoard = [NBoardS|NBoardL].

evalPDraw(_Board, [], _CurrP, move(none)).
evalPDraw(Board, [Move|Moves], CurrP, BestMove) :-
    (
        other(Board, CurrP, CompP, _CurrP, _CompP),
        singleMove(Board, CurrP, Move, NBoard),
    	rotationDraw(NBoard, CompP, _W),
        avlMovesL(NBoard, 0, AvlMoves),
        evalDraw(NBoard, AvlMoves, CompP, Move, BMove),
        BMove \= move(none), BestMove = Move, !
    );
    evalPDraw(Board, Moves, CurrP, BestMove).

evalDraw(_NBoard, [], _CompP, _PrevMove, move(none)).
evalDraw(NBoard, [Move|Moves], CompP, PrevMove, BestMove) :-
    (
        singleMove(NBoard, CompP, Move, NNBoard),
        draw(NNBoard, CompP),
        BestMove = PrevMove, !
    );
    evalDraw(NBoard, Moves, CompP, PrevMove, BestMove). 

% ---------- Alpha-beta Pruning ----------

valueNext(_MinMax, Board, CurrP, 0, _A, _B, mv(_Move, Value)) 
	:- value(Board, CurrP, Value).
valueNext(MinMax, Board, CurrP, Depth, A, B, BestMove) :-
    Depth > 0, NDepth is Depth - 1,
    avlMovesL(Board, NDepth, AvlMoves),
    ( ( MinMax == min, minEval(Board, CurrP, AvlMoves, NDepth, A, B, _ABMove, BestMove));
      ( MinMax == max, maxEval(Board, CurrP, AvlMoves, NDepth, A, B, _ABMove, BestMove)) ).

minEval(_Board, _CurrP, [], _Depth, _A, B, ABMove, mv(ABMove, B)).
minEval(Board, CurrP, [Move|Moves], Depth, A, B, ABMove, BestMove) :-
    other(Board, CurrP, CompP, _CurrL, _CompL),
	singleMove(Board, CurrP, Move, PR_Board),
    valueNext(max, PR_Board, CompP, Depth, A, B, mv(_BMMove, Value)),
    cutoff(min, Board, CurrP, [Move|Moves], Depth, Value, A, B, ABMove, BestMove).

maxEval(_Board, _CurrP, [], _Depth, A, _B, ABMove, mv(ABMove, A)).
maxEval(Board, CurrP, [Move|Moves], Depth, A, B, ABMove, BestMove) :- 
    other(Board, CurrP, CompP, _CurrL, _CompL),
	singleMove(Board, CurrP, Move, PR_Board),
    valueNext(min, PR_Board, CompP, Depth, A, B, mv(_BMMove, Value)),
    cutoff(max, Board, CurrP, [Move|Moves], Depth, Value, A, B, ABMove, BestMove).

cutoff(max, Board, CurrP, [Move|Moves], Depth, Value, A, B, AMove, BestMove) :-
    ( Value >= B, 
      BestMove = mv(Move, A), ! );
    ( B > Value, Value > A, !,
      maxEval(Board, CurrP, Moves, Depth, Value, B, Move, BestMove) );
    ( A >= Value, !,
      maxEval(Board, CurrP, Moves, Depth, A, B, AMove, BestMove) ).
cutoff(min, Board, CurrP, [Move|Moves], Depth, Value, A, B, BMove, BestMove) :-
    ( Value >= B, 
      BestMove = mv(Move, B), ! );
    ( B > Value, Value > A, !,
      minEval(Board, CurrP, Moves, Depth, A, Value, Move, BestMove));
    ( A >= Value, !,
      minEval(Board, CurrP, Moves, Depth, A, B, BMove, BestMove)).

% ---------- Pentago_ai ----------

% 1. Try to win in Tn
pentago_ai(Board, CurrentPlayer, BestMove, NextBoard) :-
	valueNext(max, Board, CurrentPlayer, 1, -100, 100, BMove),
    BMove = mv(Move, 99),
    singleMove(Board, CurrentPlayer, Move, NBoard),
    formatOutput(Move, NBoard, CurrentPlayer, BestMove, NextBoard), !.

% 2. Try to draw in Tn+1
pentago_ai(Board, CurrentPlayer, BestMove, NextBoard) :-
    avlMovesL(Board, 1, AvlMoves),
    evalPDraw(Board, AvlMoves, CurrentPlayer, BestMove),
    BestMove \= move(none),
    singleMove(Board, CurrentPlayer, BestMove, NextBoard), !.

% 3. A-beta pruning in Tn+1
pentago_ai(Board, CurrentPlayer, BestMove, NextBoard) :-
	valueNext(min, Board, CurrentPlayer, 2, -100, 100, BMove),
    BMove = mv(Move, _Value),
	singleMove(Board, CurrentPlayer, Move, NBoard), 
    formatOutput(Move, NBoard, CurrentPlayer, BestMove, NextBoard), !.

/* ===== ARCHIVED =====
 *
 * contains([], _, 0).
 * contains(_, [], 0).
 * contains([SH|ST], [SH|LT], C) :- contains(ST, LT, E), C is E+1, !.
 * contains([SH|ST], [LH|LT], C) :- SH > LH, contains([SH|ST], LT, E), C = E, !.
 * contains([SH|ST], [LH|LT], C) :- SH < LH, contains(ST, [LH|LT], E), C = E.
 */