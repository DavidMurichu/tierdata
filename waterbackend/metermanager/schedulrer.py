import threading
import time
from .task import update_meters

def run_periodically(interval, function):
    def wrapper():
        while True:
            function()
            time.sleep(interval)

    thread = threading.Thread(target=wrapper)
    thread.start()

# Run the task every hour (3600 seconds)
run_periodically(3600, update_meters)