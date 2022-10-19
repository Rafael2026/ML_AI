import logging
import pytube
import whisper
import sys
import argparse

url = 'https://www.youtube.com/watch?v=IoTWYHbEkpE'
model = whisper.load_model('small')

video = pytube.YouTube(url)
audio = video.streams.get_audio_only()
audio.download(filename='youtube.mp4')

result = model.transcribe('youtube.mp4')

print(result["text"])
