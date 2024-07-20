from django.utils import timezone
from .models import Meter

def update_meters():
    now = timezone.now()
    meters = Meter.objects.filter(is_active=True)
    for meter in meters:
        meter.previous_reading = meter.current_reading
        meter.current_reading += 10  # Increment by a fixed amount or use your logic
        meter.save()