document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('laterToday').addEventListener('click', laterToday);
      document.getElementById('tomorrow').addEventListener('click', tomorrow);
      document.getElementById('weekend').addEventListener('click', weekend);
      document.getElementById('nextWeek').addEventListener('click', nextWeek);
      document.getElementById('someday').addEventListener('click', someday);
      document.getElementById('uPick').addEventListener('click', uPick);
      
});

function laterToday() {
    document.getElementById("wholeBox").innerHTML = "<div class='confirmationMessage'>Later Today</div>";
}

function tomorrow() {
    document.getElementById("wholeBox").innerHTML = "<div class='confirmationMessage'>Tomorrow</div>";
}

function weekend() {
    document.getElementById("wholeBox").innerHTML = "<div class='confirmationMessage'>This weekend</div>";
}

function nextWeek() {
    document.getElementById("wholeBox").innerHTML = "<div class='confirmationMessage'>Next week</div>";
}

function someday() {
    document.getElementById("wholeBox").innerHTML = "<div class='confirmationMessage'>Someday</div>";
}

function uPick() {
    document.getElementById("wholeBox").innerHTML = "<div class='confirmationMessage'>...coming soon...</div>";
}
