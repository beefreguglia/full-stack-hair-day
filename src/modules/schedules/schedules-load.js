import { hoursLoad } from "../form/hours-load";

// Seleciona o input de data
const selectedDateInput = document.getElementById("date");

export function schedulesDays() {
  // Obtém a data do input
  const selectedDate = selectedDateInput.value;

  //Renderiza as horas disponíveis.
  hoursLoad({ date: selectedDate });
  
  // Busca na API os agendamentos para carregar do lado direito na tela.

  // Os horários disponíveis (horário futuro + não agendado).

}