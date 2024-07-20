from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import Meter

class MeterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meter
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Assume you want to filter users who are in a group called 'RegularUsers'
        group_name = 'Customers'
        group = Group.objects.get(name=group_name)
        self.fields['customer_id'].queryset = User.objects.filter(groups=group)
