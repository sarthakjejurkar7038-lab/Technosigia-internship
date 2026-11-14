from rest_framework import serializers
from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = [
            "id", "name", "email", "phone", "course",
            "city", "age", "created_at", "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]

    def validate_age(self, value):
        if value is not None and not 10 <= value <= 100:
            raise serializers.ValidationError("Age must be between 10 and 100.")
        return value