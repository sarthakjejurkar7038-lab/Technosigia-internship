from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ["id", "name", "email", "course", "city", "created_at"]
        read_only_fields = ["id", "created_at"]