![Cover](https://raw.githubusercontent.com/kasiaizak/filmleb/master/src/assets/img/cover.png)

# FilmŁeb po mojemu ;)

Aplikacja w JS (z użyciem biblioteki jQuery) do budowania własnej biblioteczki filmowej, którą napisałam podczas stacjonarnego kursu *JavaScript Apps Starter* organizowanego przez ** Fundację Girls Code Fun**. - [widok on-line](https://kasiaizak.github.io/filmleb/)

> **EN:** *An application to build my own film library, which I created during the JavaScript Apps Starter course organized by the Girls Code Fun Foundation. - [on-line view](https://kasiaizak.github.io/filmleb/)*

## Użyte technologie

Za wersję wizualną odpowiada Bootstrap 4, a do zarządzania danymi została wykorzystana baza Firebase (na stałe zablokowana do użytku publicznego, tymczasowo blokadę można zdjąć w celu dodania nowych danych). W planie mam dodanie logowania.

> **EN:** *HTML, CSS (Bootstrap 4 is responsible for the visual version) and JavaScript (jQuery library). To manage the data base was used Firebase (permanently locked to the public, temporarily lock can be removed to add new data). I plan to add a login.*

## Podgląd strony

![Screenshot](https://raw.githubusercontent.com/kasiaizak/filmleb/master/github/screenshot.jpg)

## Uruchomienie strony lokalnie z podglądem zmian na żywo (dla developerów korzystających z Node.js)

Jeśli nie masz jeszcze zainstalowanego Node.js to nic straconego... :) Tu znajduje się instalka i można szybko to nadrobić: [oficjalna strona Node.js](https://nodejs.org/en/).

W konsoli (terminalu) wpisujemy poniższe polecenie w celu instalacji tzw. *task runnera* GULP. Polecenie wykonujemy raz na danej maszynie, czyli jeśli robiłeś/aś to już wcześniej to pomiń ten krok i poniższą komendę. Ważne: na Windowsie terminal uruchamiamy z uprawnieniami administratora.

`npm install -g gulp-cli`

### Inicjowanie projektu

Po sklonowaniu repozytorium na swój komputer wchodzimy do głównego katalogu projektu i wykonujemy poniższe polecenia:

`npm install` - polecenie uruchamiane raz na dany projekt

### Podgląd na żywo ze śledzeniem zmian

`gulp` - start *task runnera*

#### Kończenie pracy

Aby przerwać pracę *gulp* wciskamy kombinację klawiszy **CTRL** + **C**.
