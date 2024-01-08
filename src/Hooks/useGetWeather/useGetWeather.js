import { useMutation } from "@tanstack/react-query";
import { getCoordinates, showMeTheWeather } from "../../resources/WeatherApis/fetchWeatherApi";

import { useWeatherStore } from "../../store/WeatherStore";
import { useLocationStore } from "../../store/LocationStore";

export const useGetWeather = () => {
  const setLocation = useLocationStore((state) => state.setLocation);
  const setWeather = useWeatherStore((state) => state.setWeather);

  const { mutate: mutateGetWeather } = useMutation({
    mutationKey: ["getWeather"],
    mutationFn: showMeTheWeather,
    onSuccess: (data) => {
      setWeather(data);
    },
  });

  return useMutation({
    mutationKey: ["getLocation"],
    mutationFn: getCoordinates,
    onSuccess: (data) => {
      setLocation(data);
      mutateGetWeather(data);
    },
  });
};
