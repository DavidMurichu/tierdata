from django.db import models
from django.contrib.auth.models import User  # Import the User model

class Meter(models.Model):
    customer_id = models.ForeignKey(User, on_delete=models.CASCADE)
    meter_number = models.CharField(max_length=20, unique=True)
    previous_reading = models.IntegerField()
    current_reading = models.IntegerField()
    is_active = models.BooleanField(default=True)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.meter_number  # Use meter_number for the string representation
