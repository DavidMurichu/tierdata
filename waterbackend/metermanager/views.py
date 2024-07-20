# myapp/views.py

from rest_framework import viewsets
from .models import Meter
from .serializers import MeterSerializer
from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from .schedulrer import run_periodically
from .task import update_meters
import threading

class MeterViewSet(viewsets.ModelViewSet):
    queryset = Meter.objects.all()
    serializer_class = MeterSerializer

# Global variable to store the scheduler thread
scheduler_thread = None

@require_http_methods(["POST"])
def start_scheduler(request):
    global scheduler_thread
    if scheduler_thread is None or not scheduler_thread.is_alive():
        scheduler_thread = threading.Thread(target=run_periodically, args=(5, update_meters))
        scheduler_thread.start()
        return HttpResponse("Scheduler started successfully.", status=200)
    return HttpResponse("Scheduler is already running.", status=400)
